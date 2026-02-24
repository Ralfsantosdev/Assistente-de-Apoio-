
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST() {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [{
      price_data: {
        currency: 'brl',
        product_data: {
          name: 'Pacote 100 Créditos'
        },
        unit_amount: 1900
      },
      quantity: 1
    }],
    success_url: process.env.NEXT_PUBLIC_BASE_URL,
    cancel_url: process.env.NEXT_PUBLIC_BASE_URL
  })

  return Response.json({ url: session.url })
}
