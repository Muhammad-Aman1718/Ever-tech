import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("adminToken")?.value;

  const isProtectedRoute =
    request.nextUrl.pathname.startsWith("/admin/dashboard");

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}
