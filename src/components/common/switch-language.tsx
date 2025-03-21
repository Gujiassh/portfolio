"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { useLocale, useTranslations } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import InternationalIcon from "../../../public/international.svg"
import { useTransition } from 'react'

export default function SwitchLanguage() {
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations()
  const locale = useLocale()
  const [isPending, startTransition] = useTransition()

  const switchLanguage = (locale: string) => {
    startTransition(() => {
      const currentPath = pathname.replace(/^\/[a-z]{2}/, '')
      const newPath = `/${locale}${currentPath}`
      router.replace(newPath)
      // window.location.reload()
    })
  }

  return (
    <motion.div
      className={cn("cursor-pointer")}
      initial={{ scale: 1, rotate: 0 }}
      whileHover={{
        scale: [0.8, 1.8, 1.5],
        rotate: [0, 45, 0],
        transition: {
          scale: {
            type: "spring",
            stiffness: 290,
            damping: 15,
            mass: 2,
          },
          rotate: {
            duration: 0.3,
            times: [0, 0.5, 1],
          },
        },
      }}
      onClick={() => {
        const currentLocale = locale
        console.log(currentLocale)
        switchLanguage(currentLocale === "zh" ? "en" : "zh")
      }}
    >
      <InternationalIcon width={25} height={25} fill={"#000"} />
    </motion.div>
  )
}
