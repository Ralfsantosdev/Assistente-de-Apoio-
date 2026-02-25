-- ==========================================
-- SETUP INICIAL (rodar no SQL Editor do Neon)
-- ==========================================

-- USERS (id é text para aceitar qualquer formato: email, uuid, demo-user etc)
create table if not exists public.users (
  id text primary key,
  email text,
  credits integer default 20,
  created_at timestamp default now()
);

-- MESSAGES (histórico completo)
create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  user_id text references public.users(id) on delete cascade,
  agent_id text not null,
  role text check (role in ('system','user','assistant')),
  content text not null,
  tokens_used integer default 0,
  created_at timestamp default now()
);

-- AUDIT EVENTS (crise + segurança)
create table if not exists public.audit_events (
  id uuid primary key default gen_random_uuid(),
  user_id text,
  event_type text,
  metadata jsonb,
  created_at timestamp default now()
);

-- CREDIT TRANSACTIONS
create table if not exists public.credit_transactions (
  id uuid primary key default gen_random_uuid(),
  user_id text references public.users(id),
  amount integer,
  type text check (type in ('purchase','usage','bonus')),
  created_at timestamp default now()
);

-- INDEXES PARA ESCALA
create index if not exists idx_messages_user on public.messages(user_id);
create index if not exists idx_messages_agent on public.messages(agent_id);
create index if not exists idx_audit_user on public.audit_events(user_id);

-- VIEW PARA CONTROLE DE CUSTO
create or replace view user_credit_usage as
select 
  user_id,
  sum(tokens_used) as total_tokens
from messages
group by user_id;

-- ==========================================
-- MIGRAÇÃO (se o banco já existia com uuid)
-- Rode somente se já tiver tabelas criadas!
-- ==========================================
-- ALTER TABLE users ALTER COLUMN id TYPE text;
-- ALTER TABLE messages ALTER COLUMN user_id TYPE text;
-- ALTER TABLE credit_transactions ALTER COLUMN user_id TYPE text;
-- ALTER TABLE audit_events ALTER COLUMN user_id TYPE text;
