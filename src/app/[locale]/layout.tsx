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
export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;

  let messages
  try {
    messages = (await import(`@/messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

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
