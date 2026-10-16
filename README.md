# Synchro Biz

A "complete business management platform" SaaS: workspaces, projects and tasks today, with a wider ERP-style module list on the landing page.

Originally created with [Lovable](https://lovable.dev/projects/a87145c2-d5b6-435a-a675-60b710157974); changes pushed here sync back to Lovable.

## What works today

- Email/password sign-up and sign-in (`/auth`, Supabase auth)
- Dashboard (`/dashboard`): create workspaces, projects and tasks, with workspace membership and roles

## Marketing site / roadmap

The landing page (`/`) advertises these modules; most are not built yet: multi-workspace, authentication, payment and billing, project management, team collaboration, staff workload, payroll, accounting and bookkeeping, HR, warehouse, sales and POS, purchasing, AI project analyzer, AI chatbot, automation hub, cyber security, audit logs, access control.

Pricing shown: Starter $29, Professional $79, Enterprise $199.

## Tech stack

Vite 5, React 18, TypeScript, Tailwind CSS 3, shadcn/ui (Radix), React Router 6, TanStack Query, Recharts, Zod, Supabase.

## Database (Supabase / Postgres, row-level security on)

- enum `app_role`: `owner`, `admin`, `manager`, `employee`
- `profiles`, `workspaces`, `workspace_members`, `projects`, `tasks`
- Policies limit access to workspaces the user belongs to; only owners manage members and workspace settings.

Migrations are in `supabase/migrations/`.

## Getting started

```bash
npm install
npm run dev
npm run build
npm run lint
```

Environment (`.env`, committed with the Lovable project; public/publishable values):

| Variable | Purpose |
|---|---|
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase anon/publishable key |
| `VITE_SUPABASE_PROJECT_ID` | Supabase project id |
