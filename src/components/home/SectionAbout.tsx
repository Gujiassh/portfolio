"use client"
import { cn } from "@/lib/utils"
import NeonButton from "../common/NeonButton"

import { motion } from "motion/react"
import { CardTitle } from "./components/CardTitle"
import { useTranslations } from "next-intl"
import { getResume, RESUME_key } from "@/const"
import { SidePanel } from "../ui/resizable-panel"
import { Button } from "@mui/material"
import { useState } from "react"
import Image from "next/image"
import { Cover } from "../ui/cover"

const SectionAbout = () => {
  const t = useTranslations()

  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  const renderOpenButton = (handleToggle: () => void) => (
    <div
      className={cn(
        "flex items-center w-full justify-start pr-4 md:pl-4 py-1 md:py-1",
        isOpen ? "pr-3" : ""
      )}
    >
      <p className="text-xl font-black tracking-tight text-gray-900 sm:text-3xl">
        <span className="bg-gradient-to-t from-neutral-200 to-stone-300 bg-clip-text font-brand text-lg font-bold text-transparent sm:text-4xl">
          Open
        </span>
      </p>
      <Button
        className="rounded-r-[33px] py-8 ml-2 "
        onClick={handleIsOpen}
        variant="outlined"
      >
        {isOpen ? "close" : "open"}
      </Button>
    </div>
  )
  return (
    <section id="about" className="p-[70px]  relative">
      <div
        className={cn(
          "flex flex-col items-center justify-center w-full h-full"
        )}
      >
        <div className={cn("flex flex-col items-center justify-center")}>
          <CardTitle title={t("关于我")} />
          <div className=" mt-[15px]">
            {t("前端开发让我着迷因为它是连接用户与技术的桥梁")}
          </div>
        </div>
        <div className={cn("flex gap-[30px]", "p-[20px]")}>
          <motion.div
            initial={{ opacity: 0, x: -100, rotateX: 45 }}
            whileInView={{
              x: 0,
              rotateX: 0,
              opacity: 1,
              transition: { duration: 2, delay: 1 },
            }}
            whileHover={{
              scale: 1.1,
              cursor: "pointer",
            }}
            viewport={{ once: true }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={cn(
              "rounded-full",
              `bg-[url('/me.png')]`,
              "bg-cover bg-center bg-no-repeat",
              "w-[300px] h-[300px]",
              "border-[5px] border-[#f4f4f4] shadow-lg",
              "perspective-1000",
              "relative"
            )}
          >
            <motion.div
              initial={{ rotateY: 0, rotateZ: 0, y: 100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 2 },
              }}
              whileHover={{
                rotateZ: 360,
                rotateY: 0,
                scale: 1.1,
                cursor: "pointer",
                transition: {
                  duration: 1,
                  repeat: Infinity,
                },
              }}
              viewport={{ once: true }}
              animate={{ 
                rotateY: 360,
                transition: {
                  duration: 1,
                  repeat: Infinity,
                }
              }}
              className="absolute left-[-10%] bottom-[-50%]"
            >
              <Image src="/catsit.jpg" alt="cat" width={100} height={100} />
            </motion.div>
          </motion.div>

          <div className="flex-1">
            <div className={"font-bold  text-[20px]"}>
              <Cover className="text-[#109af7]"> {t("白傲")} (Ryan)</Cover>
            </div>
            <div className="text-[18px] ">{t("前端工程师")}</div>
            <div className="mt-[20px]  text-[14px] flex flex-col gap-[10px]">
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                {t("自我介绍1")}
              </motion.p>
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                {t("自我介绍2")}
              </motion.p>
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
              >
                {t("自我介绍3")}
              </motion.p>
            </div>
            <NeonButton
              onClick={async () => {
                getResume()
              }}
              className="mt-[20px]"
              variant="cyan"
            >
              {t("下载简历")}
            </NeonButton>
          </div>
        </div>
      </div>
      {/* veido */}
      <div className="absolute top-5 left-0 z-[100]">
        <SidePanel
          panelOpen={isOpen}
          handlePanelOpen={handleIsOpen}
          renderButton={renderOpenButton}
        >
          <div className="w-[1000px] h-[500px] flex justify-center items-center p-10">
            <div>
              <iframe
                width={800}
                height={500}
                src="//player.bilibili.com/player.html?isOutside=true&aid=113810778097522&bvid=BV1eecPeFETa&cid=27819902516&p=1"
              ></iframe>
            </div>
          </div>
        </SidePanel>
      </div>

      {/* cat */}
    </section>
  )
}

export default SectionAbout
