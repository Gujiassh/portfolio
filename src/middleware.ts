import createMiddleware from "next-intl/middleware"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// 创建 next-intl 中间件
const intlMiddleware = createMiddleware({
  locales: ["en", "zh"],
  defaultLocale: "zh",
  localePrefix: "always",
})

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // 处理没有语言前缀的路径
  if (pathname === '/' || !pathname.startsWith('/zh') && !pathname.startsWith('/en')) {
    // 获取用户首选语言，如果没有则默认使用中文
    const locale = request.headers.get('accept-language')?.split(',')[0]?.startsWith('en') ? 'en' : 'zh';
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  // 其他路径使用 next-intl 中间件
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!api|_next|.*\\..*).*)",
    // 匹配 /
    "/",
  ],
}
