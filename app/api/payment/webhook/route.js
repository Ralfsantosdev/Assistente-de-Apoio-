import { MercadoPagoConfig, Payment } from 'mercadopago';
import sql from '@/lib/db';

const client = new MercadoPagoConfig({ accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN });

export async function POST(req) {
  try {
    // Mercado Pago pode enviar dados via URL Params ou JSON body
    const url = new URL(req.url);
    const id = url.searchParams.get('data.id') || url.searchParams.get('id');
    const type = url.searchParams.get('type') || url.searchParams.get('topic');
    
    // Mercado Pago envia o 'payment' como tipo no webhook principal
    if (type === 'payment' && id) {
      const payment = new Payment(client);
      const paymentInfo = await payment.get({ id });

      if (paymentInfo.status === 'approved') {
        const userId = paymentInfo.metadata.user_id;
        const creditsToAdd = Number(paymentInfo.metadata.credits_to_add);

        // Atualizar o banco de dados via Neon/Postgres
        await sql`
          UPDATE users 
          SET credits = credits + ${creditsToAdd} 
          WHERE id = ${userId}
        `;

        // Registrar também a transação para auditoria (opcional mas recomendado)
        await sql`
          INSERT INTO credit_transactions (user_id, amount, type)
          VALUES (${userId}, ${creditsToAdd}, 'purchase')
        `;

        console.log(`Pagamento aprovado. Creditado ${creditsToAdd} para o user ${userId}.`);
      }
    }

    // Mercado Pago exige que você responda com 200/201 rapidamente
    return Response.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("Erro no Webhook do Mercado Pago:", error);
    return Response.json({ error: "Erro interno" }, { status: 500 });
  }
}
