import { MercadoPagoConfig, Payment } from 'mercadopago';
import sql from '@/lib/db';

const client = new MercadoPagoConfig({ accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN });

export async function POST(req) {
  try {
    // Ler o body JSON enviado pelo Mercado Pago
    const body = await req.json();
    const { type, action, data, live_mode } = body;

    console.log('[webhook] Recebido:', JSON.stringify(body));

    // Responder imediatamente para eventos que não são de pagamento
    if (type !== 'payment' && action !== 'payment.updated' && action !== 'payment.created') {
      return Response.json({ received: true }, { status: 200 });
    }

    const paymentId = data?.id;

    if (!paymentId) {
      return Response.json({ received: true }, { status: 200 });
    }

    // Ignorar IDs de teste (live_mode: false ou ID de teste "123456")
    if (!live_mode || String(paymentId) === '123456') {
      console.log('[webhook] Evento de teste ignorado:', paymentId);
      return Response.json({ received: true, test: true }, { status: 200 });
    }

    const payment = new Payment(client);
    const paymentInfo = await payment.get({ id: paymentId });

    if (paymentInfo.status === 'approved') {
      const userId = paymentInfo.metadata?.user_id;
      const creditsToAdd = Number(paymentInfo.metadata?.credits_to_add || 0);

      if (!userId || !creditsToAdd) {
        console.error('[webhook] Metadata ausente:', paymentInfo.metadata);
        return Response.json({ received: true }, { status: 200 });
      }

      await sql`
        UPDATE users 
        SET credits = credits + ${creditsToAdd} 
        WHERE id = ${userId}
      `;

      await sql`
        INSERT INTO credit_transactions (user_id, amount, type)
        VALUES (${userId}, ${creditsToAdd}, 'purchase')
      `;

      console.log(`[webhook] Aprovado. +${creditsToAdd} créditos para ${userId}`);
    }

    return Response.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error('[webhook] Erro:', error.message);
    // Retornar 200 mesmo em erro para o MP não reenviar infinitamente
    return Response.json({ received: true, error: error.message }, { status: 200 });
  }
}
