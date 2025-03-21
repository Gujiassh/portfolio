
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body>
       {children}
      </body>
    </html>
  )
}
// 可选：声明支持的语言
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }]
}
