/**
 * Rate Limiter in-memory simples (sem dependência externa)
 * Cada entrada: { count, resetAt }
 * Para produção com múltiplas instâncias, migrar para Upstash Redis.
 */

const store = new Map();

// Garbage Collector: limpa IPs expirados a cada 5 minutos
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of store.entries()) {
    if (now > entry.resetAt) {
      store.delete(key);
    }
  }
}, 5 * 60 * 1000);

/**
 * @param {string} key - Identificador único (ex: IP ou userId)
 * @param {number} limit - Máximo de requisições permitidas
 * @param {number} windowMs - Janela de tempo em ms
 * @returns {{ ok: boolean, remaining: number, retryAfter: number }}
 */
export function rateLimit(key, limit = 20, windowMs = 60_000) {
  const now = Date.now();
  const entry = store.get(key);

  if (!entry || now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1, retryAfter: 0 };
  }

  if (entry.count >= limit) {
    return {
      ok: false,
      remaining: 0,
      retryAfter: Math.ceil((entry.resetAt - now) / 1000)
    };
  }

  entry.count += 1;
  return { ok: true, remaining: limit - entry.count, retryAfter: 0 };
}
