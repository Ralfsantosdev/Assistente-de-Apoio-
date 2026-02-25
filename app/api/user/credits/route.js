import sql from '@/lib/db'
import { rateLimit } from '@/lib/rateLimit'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'

export async function GET(req) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'anonymous'
    const rl = rateLimit(`credits:${ip}`, 30, 60_000)
    if (!rl.ok) {
      return Response.json({ error: "Muitas requisições." }, { status: 429 })
    }

    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return Response.json({ error: "Não autenticado." }, { status: 401 })
    }
    const userId = session.user.id

    const users = await sql`SELECT credits FROM users WHERE id = ${userId}`

    if (users.length === 0) {
      return Response.json({ credits: 0 }) // Se não tem usuário, 0 créditos
    }

    return Response.json({ credits: users[0].credits })
  } catch (error) {
    console.error("[credits] Erro:", error.message)
    return Response.json({ error: "Erro interno." }, { status: 500 })
  }
}
