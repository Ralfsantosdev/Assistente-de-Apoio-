import { MercadoPagoConfig, Payment } from 'mercadopago';
import sql from '@/lib/db';
import crypto from 'crypto';

const client = new MercadoPagoConfig({ accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN });

/**
 * Valida a assinatura HMAC enviada pelo Mercado Pago no header x-signature.
 * Docs: https://www.mercadopago.com.br/developers/pt/docs/your-integrations/notifications/webhooks
 */
function verifyMPSignature(req, rawBody) {
  const secret = process.env.MERCADOPAGO_WEBHOOK_SECRET;
  if (!secret) return true; // Se não configurou o secret, passa (mas configure!)

  const signature = req.headers.get('x-signature') || '';
  const requestId = req.headers.get('x-request-id') || '';

  // Extrair ts e v1 do header: "ts=...,v1=..."
  const parts = Object.fromEntries(signature.split(',').map(p => p.split('=')));
  const ts = parts.ts;
  const v1 = parts.v1;
  if (!ts || !v1) return false;

  const manifest = `id:${JSON.parse(rawBody)?.data?.id};request-id:${requestId};ts:${ts};`;
  const expected = crypto.createHmac('sha256', secret).update(manifest).digest('hex');
  return expected === v1;
}

export async function POST(req) {
  try {
    const rawBody = await req.text();

    // Verificar assinatura antes de processar qualquer dado
    if (!verifyMPSignature(req, rawBody)) {
      console.error('[webhook] Assinatura inválida — possível requisição forjada!');
      return Response.json({ error: "Assinatura inválida." }, { status: 401 });
    }

    const body = JSON.parse(rawBody);
    const { type, action, data, live_mode } = body;

    console.log('[webhook] Recebido:', JSON.stringify({ type, action, live_mode, id: data?.id }));

    if (type !== 'payment' && action !== 'payment.updated' && action !== 'payment.created') {
      return Response.json({ received: true }, { status: 200 });
    }

    const paymentId = data?.id;
    if (!paymentId) return Response.json({ received: true }, { status: 200 });

    // Ignorar eventos de teste
    if (!live_mode || String(paymentId) === '123456') {
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

      await sql`UPDATE users SET credits = credits + ${creditsToAdd} WHERE id = ${userId}`;
      await sql`INSERT INTO credit_transactions (user_id, amount, type) VALUES (${userId}, ${creditsToAdd}, 'purchase')`;

      console.log(`[webhook] Aprovado. +${creditsToAdd} créditos para ${userId}`);
    }

    return Response.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error('[webhook] Erro:', error.message);
    return Response.json({ received: true }, { status: 200 });
  }
}
