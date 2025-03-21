"use client"
import SectionAbout from "@/components/home/SectionAbout"
import SectionContact from "@/components/home/SectionContact"
import SectionHire from "@/components/home/SectionHire"
import SectionHome from "@/components/home/SectionHome"
import SectionLink from "@/components/home/SectionLink"
import SectionPortfolio from "@/components/home/SectionPortfolio"
import SectionResume from "@/components/home/SectionResume"
import SectionSkills from "@/components/home/SectionSkills"
import SectionTech from "@/components/home/SectionTech"
import { cn } from "@/lib/utils"
import { motion, useScroll, useSpring, useTransform } from "motion/react"
import { useRef } from "react"

export default function Home() {
  const ref = useRef(null)
  const {  scrollYProgress } = useScroll()
  const springScrollYProgress = useSpring(scrollYProgress)
  const heightPercentage = useTransform(
    springScrollYProgress,
    [0, 1],
    ["0", "100%"]
  )



  return (
    <div
      ref={ref}
      className={cn(
        "relative",
        "flex flex-col",
        "[&_section]:w-[100vw] [&_section]:h-screen [&_section]:shrink-0 "
      )}
    >
      {/* 类滚动条 */}
      <motion.div
        className={cn(
          "fixed",
          "bg-black h-[100vh] w-[2px]",
          "top-0 right-0",
          "z-[100]"
        )}
      >
        <motion.div
          className="w-full bg-white h-1"
          style={{
            height: heightPercentage,
          }}
        ></motion.div>
      </motion.div>

      <SectionHome />
      <SectionAbout />
      <SectionSkills />
      <SectionPortfolio />
      <SectionHire />
      <SectionResume />
      <SectionTech />
      {/* <SectionContact /> */}
      <SectionLink />
    </div>
  )
}
