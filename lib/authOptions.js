import GoogleProvider from 'next-auth/providers/google';
import sql from '@/lib/db';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // Cria/atualiza o usuário no banco quando ele faz login
    async signIn({ user }) {
      try {
        await sql`
          INSERT INTO users (id, email, credits)
          VALUES (${user.email}, ${user.email}, 20)
          ON CONFLICT (id) DO NOTHING
        `;
        return true;
      } catch (err) {
        console.error('[nextauth] Erro ao criar usuário:', err.message);
        return false;
      }
    },
    // Adiciona o email no token JWT para uso nas API routes
    async jwt({ token, user }) {
      if (user) token.userId = user.email;
      return token;
    },
    // Expõe o userId na session do lado cliente
    async session({ session, token }) {
      if (session.user) session.user.id = token.userId;
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
};
