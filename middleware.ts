import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const username = request.cookies.get('username')?.value;
  const password = request.cookies.get('password')?.value;

  if (username === 'admin' && password === 'fifa') {
     return NextResponse.next();
  }
  
  return NextResponse.redirect(new URL('/login', request.url));

}

export const config = {
  matcher: '/',
}
