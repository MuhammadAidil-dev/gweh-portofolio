# gweh-portofolio

Feature-based: `app/`, `features/<fitur>/`, `components/ui/`, `lib/`, `stores/`.
Butuh Node >= 20.9.

## Scripts

- `npm run dev` (port 3001) / `build` / `start` / `lint` / `test` / `typecheck`

## Env

Copy `.env.example` → `.env.development` / `.env.production`. Wajib `NEXT_PUBLIC_API_URL`
(base URL backend, tanpa trailing slash dan tanpa prefix; default dev `http://localhost:3000`).

## Auth

Kontrak dengan backend template (`/auth/login`, `/auth/refresh`, `/auth/logout`, `/auth/me`).
Access token hanya di memory Zustand. Refresh token httpOnly cookie, dikirim lewat
`credentials: "include"`. Tanpa localStorage. `proxy.ts` (pengganti `middleware.ts` di Next 16)
menjaga route `/dashboard` berdasarkan cookie `refreshToken`.
