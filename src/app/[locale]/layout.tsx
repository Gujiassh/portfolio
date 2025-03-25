import { useLocale } from "next-intl"
import { notFound } from "next/navigation"
import "./globals.css"
import Header from "@/components/Header"
import { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import SwitchLanguage from "@/components/common/switch-language"
import { setRequestLocale } from 'next-intl/server'

// 生成页面级元数据
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
 
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default

  return {
    title: messages.pages.home.title,
    description: messages.pages.home.description,
    icons: {
      icon: "/cat.svg", // 或者 '/icon.png'
    },
  }
}

// 主布局组件
export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const { locale } = await params;
  let messages
  try {
    messages = (await import(`@/messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {/* <Header /> */}
      <div className="fixed top-2 right-2 bg-white/80 shadow-lg rounded-full p-2 z-[100]">
        <SwitchLanguage />
      </div>
      {children}
    </NextIntlClientProvider>
  )
}
