import { MercadoPagoConfig, Preference } from 'mercadopago';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

const client = new MercadoPagoConfig({ accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN });

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return Response.json({ error: "Não autenticado." }, { status: 401 });
    }
    const userId = session.user.id;

    const { planOption } = await req.json();

    const plans = {
      basic: { title: "Pacote Básico de Créditos", price: 19.90, credits: 50 },
      pro: { title: "Pacote Profissional de Créditos", price: 39.90, credits: 150 },
    };

    const selectedPlan = plans[planOption] || plans.basic;

    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: [
          {
            id: planOption || "basic",
            title: selectedPlan.title,
            quantity: 1,
            unit_price: selectedPlan.price,
            currency_id: 'BRL',
          }
        ],
        metadata: {
          user_id: userId,
          credits_to_add: selectedPlan.credits
        },
        back_urls: {
          success: `${process.env.NEXT_PUBLIC_BASE_URL}/?payment=success`,
          failure: `${process.env.NEXT_PUBLIC_BASE_URL}/?payment=failure`,
          pending: `${process.env.NEXT_PUBLIC_BASE_URL}/?payment=pending`
        },
        auto_return: "approved",
      }
    });

    return Response.json({ init_point: result.init_point });
  } catch (error) {
    console.error("Erro ao gerar link do Mercado Pago:", error);
    return Response.json({ error: "Erro interno ao processar pagamento." }, { status: 500 });
  }
}
