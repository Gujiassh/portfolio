"use client"
import { cn } from "@/lib/utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { useMemo, useState } from "react"
import WaveText from "../common/WaveText"
import { CardBody, CardContainer, CardItem } from "../ui/3d-card"
import { getResume } from "@/const"
import { motion } from "framer-motion"
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const SectionHome = () => {
  const t = useTranslations()
  const locale = useLocale()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const selfIntroduction = useMemo(() => {
    const list = [
      t("你好，我是白傲"),
      t("我是一名前端工程师"),
      t("我有三年工作经验"),
    ]

    return locale === "zh" ? list : list?.map((item) => item.toUpperCase())
  }, [locale, t])
  useGSAP(() => {
    const movePxiel = 30
    const clampX = gsap.utils.clamp(-movePxiel, movePxiel)
    const clampY = gsap.utils.clamp(-movePxiel, movePxiel)

    gsap.to(".information-card", {
      x: () => clampX(Math.ceil(mousePosition.x / 20)),
      y: () => clampY(Math.ceil(mousePosition.y / 5)),
      ease: "power3.out",
      duration: 2,
    })
  }, [mousePosition])
  return (
    <section
      className={cn(
        "flex items-center justify-center",
        `bg-[url('/wallace-henry-5utisuD5Bdk-unsplash.jpg')]`,
        "bg-cover bg-center bg-no-repeat"
      )}
      id="home"
    >
      <div className="flex w-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-[50%] flex items-center justify-center"
        >
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {t('通过代码实现想法')}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {t('三年前端开发经验')}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/mycat.jpg"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  target="__blank"
                  className="cursor-pointer px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  <span onClick={getResume}> {t('我的简历')} →</span>
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  {t('Base in 杭州')}
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </motion.div>

        {/* 右侧 */}
        <div className="w-[50%] text-[#fff] text-center flex flex-col justify-center items-center">
          <div className={`text-[30px] welcome`}>
            <WaveText text={t("欢迎来到我的网站")} className=" font-bold" />
          </div>

          {/* <NeonButton
            className="mt-[40px] w-[200px]"
            onClick={() => {
              scrollToElement("about")
            }}
          >
            {t("关于我")}
          </NeonButton> */}
        </div>
      </div>
    </section>
  )
}

export default SectionHome
