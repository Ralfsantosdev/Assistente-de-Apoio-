-- USERS
create table public.users (
  id uuid primary key default gen_random_uuid(),
  email text,
  credits integer default 20,
  created_at timestamp default now()
);

-- MESSAGES (histórico completo)
create table public.messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete cascade,
  agent_id text not null,
  role text check (role in ('system','user','assistant')),
  content text not null,
  tokens_used integer default 0,
  created_at timestamp default now()
);

-- AUDIT EVENTS (crise + segurança)
create table public.audit_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  event_type text,
  metadata jsonb,
  created_at timestamp default now()
);

-- CREDIT TRANSACTIONS
create table public.credit_transactions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id),
  amount integer,
  type text check (type in ('purchase','usage','bonus')),
  created_at timestamp default now()
);

-- INDEXES PARA ESCALA
create index idx_messages_user on public.messages(user_id);
create index idx_messages_agent on public.messages(agent_id);
create index idx_audit_user on public.audit_events(user_id);

-- VIEW PARA CONTROLE DE CUSTO
create view user_credit_usage as
select 
  user_id,
  sum(tokens_used) as total_tokens
from messages
group by user_id;
