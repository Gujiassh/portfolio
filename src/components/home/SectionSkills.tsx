import { cn } from "@/lib/utils"
import CircleProgress from "../common/CircleProgress"
import { CardTitle } from "./components/CardTitle"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import ScrollingText from "../ui/scroll-text"

const SectionSkills = () => {
  const t = useTranslations()

  const skillsData = [
    {
      name: "HTML",
      process: 90,
    },
    {
      name: "CSS",
      process: 80,
    },
    {
      name: "JavaScript",
      process: 70,
    },
    {
      name: t("浏览器工作原理及计算机基础"),
      process: 80,
    },
    {
      name: "Git",
      process: 80,
    },
    {
      name: "React",
      process: 80,
    },
    {
      name: "Rxjs",
      process: 50,
    },
    {
      name: "Nodejs",
      process: 50,
    },

    {
      name: "Zustandjs",
      process: 50,
    },
    {
      name: `threejs (${t("学习中")})`,
      process: 30,
    },
  ]
  return (
    <section id="skills" className="overflow-hidden p-[70px] !bg-white relative">
      <div className={cn("flex flex-col items-center justify-center")}>
        <div className={cn("flex flex-col items-center justify-center")}>
          <CardTitle title={t("技能")} />
          <div className="text-[#797979] mt-[15px]">{t("技能简介")}</div>
        </div>
        <div
          className={cn(
            "w-full",
            "flex gap-[30px]",
            "p-[20px]",
            "grid grid-cols-4 gap-4"
          )}
        >
          {skillsData.map((a) => {
            return (
              <motion.div
                key={a.name}
                className="flex flex-col items-center justify-center"
                initial={{ rotateX: 0 }}
              >
                <CircleProgress
                  progress={a.process}
                  size={100}
                  strokeWidth={10}
                  color="#109af7"
                />

                <div className="text-[14px] mt-[10px] text-[#1976d2] text-center text-nowrap">
                  {a.name}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
     
      <div
        className={cn("absolute top-[50%] left-[50%]")}
        style={{
          transform: "translate(-50%, 350%) rotateZ(45deg)",
          transformOrigin: "center",
        }}
      >
        <ScrollingText text="Think,Watch,Code,Explore,Feel"></ScrollingText>
      </div>
      <ScrollingText text="Think,Watch,Code,Explore,Feel" />
    </section>
  )
}

export default SectionSkills
