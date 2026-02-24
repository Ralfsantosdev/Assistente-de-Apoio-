import sql from '../../../../lib/db'

export async function GET(req) {
  try {
    const url = new URL(req.url)
    const userId = url.searchParams.get('userId')

    if (!userId) {
      return Response.json({ error: "userId obrigatório" }, { status: 400 })
    }

    // Tenta buscar o usuário
    const users = await sql`
      SELECT credits FROM users WHERE id = ${userId}
    `

    if (users.length === 0) {
      // Usuário não existe ainda — cria com 20 créditos de boas-vindas
      await sql`
        INSERT INTO users (id, credits) VALUES (${userId}, 20)
        ON CONFLICT (id) DO NOTHING
      `
      return Response.json({ credits: 20 })
    }

    return Response.json({ credits: users[0].credits })
  } catch (error) {
    // Loga o erro real para aparecer nos logs da Vercel
    console.error("[credits] Erro:", error.message, error.stack)
    return Response.json({ error: "Erro interno", detail: error.message }, { status: 500 })
  }
}
