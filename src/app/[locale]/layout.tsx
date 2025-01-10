import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import "./globals.css";
import Header from "@/components/Header";
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl'
// 生成页面级元数据
export async function generateMetadata(): Promise<Metadata> {
  const messages = (await import(`@/messages/zh.json`)).default;

  return {
    title: messages.pages.home.title,
    description: messages.pages.home.description,
    icons: {
      icon: '/cat.svg'  // 或者 '/icon.png'
    }
  };
}

// 主布局组件
export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  let messages
  try {
    messages = (await import(`@/messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  // 移除 useLocale 的使用，直接使用 params 中的 locale
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
