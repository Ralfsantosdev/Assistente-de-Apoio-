import sql from '@/lib/db'
import { rateLimit } from '@/lib/rateLimit'

export async function GET(req) {
  try {
    // Rate limiting: 30 req/min por IP
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'anonymous'
    const rl = rateLimit(`credits:${ip}`, 30, 60_000)
    if (!rl.ok) {
      return Response.json({ error: "Muitas requisições." }, { status: 429 })
    }

    const url = new URL(req.url)
    const userId = url.searchParams.get('userId')

    if (!userId || typeof userId !== 'string' || userId.length > 256) {
      return Response.json({ error: "userId inválido" }, { status: 400 })
    }

    const users = await sql`SELECT credits FROM users WHERE id = ${userId}`

    if (users.length === 0) {
      await sql`
        INSERT INTO users (id, credits) VALUES (${userId}, 20)
        ON CONFLICT (id) DO NOTHING
      `
      return Response.json({ credits: 20 })
    }

    return Response.json({ credits: users[0].credits })
  } catch (error) {
    console.error("[credits] Erro:", error.message)
    return Response.json({ error: "Erro interno." }, { status: 500 })
  }
}
