import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Next 16: `middleware.ts` diganti `proxy.ts`.
// Guard auth by cookie: refresh token httpOnly tidak bisa dibaca client, jadi guard
// cek keberadaan cookie `refreshToken` (di-set backend). Access token tetap di memory Zustand.
// Cookie dikirim ke host yang sama (port diabaikan) — di production, web & api harus
// satu registrable domain (mis. app.example.com + api.example.com) agar guard ini bekerja.
const PROTECTED_PREFIXES = ["/dashboard"];

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const needsGuard = PROTECTED_PREFIXES.some((p) => pathname.startsWith(p));
  if (!needsGuard) return NextResponse.next();

  if (!req.cookies.has("refreshToken")) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
