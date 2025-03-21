"use client"
import { motion } from "motion/react"
import { useTranslations } from "next-intl"
import { MaskContainer } from "@/components/ui/svg-mask-effect"

const SectionTech = () => {
  const t = useTranslations()

  return (
    <section
      id="tech"
      className="w-full  p-[40px] overflow-hidden flex items-center justify-center bg-[#f4f4f4] relative"
    >
      <div className="flex h-[40rem] w-full items-center justify-center overflow-hidden">
        <MaskContainer
          revealText={
            <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white">
              {t("本网站搭建使用了以下技术栈")}
            </p>
          }
          className="h-[40rem] rounded-md w-full border text-white dark:text-black"
        >
          React,Next,TypeScript,Motion,Tailwind Css,
          <span className="text-blue-500">Shadcn/ui</span>{" "}
        </MaskContainer>
      </div>
    </section>
  )
}

export default SectionTech
