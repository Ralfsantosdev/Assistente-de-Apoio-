import sql from '../../../lib/db'

export async function GET(req) {
  try {
    const url = new URL(req.url)
    const userId = url.searchParams.get('userId')

    if (!userId) {
      return Response.json({ error: "userId obrigatório" }, { status: 400 })
    }

    const users = await sql`
      SELECT credits FROM users WHERE id = ${userId}
    `

    if (users.length === 0) {
      // Se for a primeira vez, podemos simular retornando 20 (ou inserindo no banco via um hook de login)
      return Response.json({ credits: 20 })
    }

    return Response.json({ credits: users[0].credits })
  } catch (error) {
    console.error("Erro ao buscar créditos:", error)
    return Response.json({ error: "Erro interno" }, { status: 500 })
  }
}
