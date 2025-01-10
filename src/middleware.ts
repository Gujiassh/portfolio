import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 创建 next-intl 中间件
const intlMiddleware = createMiddleware({
  locales: ['en', 'zh'],
  defaultLocale: 'zh',
  localePrefix: 'always'
});

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 处理根路径
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/zh', request.url));
  }

  // 其他路径使用 next-intl 中间件
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(zh|en)/:path*']
}; 