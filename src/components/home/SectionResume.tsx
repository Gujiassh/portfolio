"use client"
import { cn } from "@/lib/utils"
import { CardTitle } from "./components/CardTitle"
import TimeLine from "./components/TimeLine"
import { useTranslations } from "next-intl"
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload"
import { getResume } from "@/const"
const SectionResume = () => {
  const t = useTranslations()
  const list = [
    {
      id: 2,
      mainTitle: t("沈阳航空航天大学"),
      title: t("2018~2022"),
      subTitle: t("本科"),
      description: t("学历简介"),
    },
    {
      id: 4,
      mainTitle: t("杭州某科技有限公司"),
      title: t("2022~至今"),
      subTitle: t("前端工程师"),
      description: t("工作经历简介"),
    },
  ]
  return (
    <section id="resume" className="p-[70px]">
      <div className={cn("flex flex-col items-center justify-center")}>
        <div
          className={cn("flex flex-col items-center justify-center mb-[20px]")}
        >
          <CardTitle title={t("个人履历")} />
          <div className="text-[#797979] mt-[15px] flex items-center justify-center gap-[10px]">
            {t("个人履历简介")}
          </div>
        </div>
        <div className="cursor-pointer text-[#797979] my-[20px] hover:text-[#008fff]">
          <div onClick={getResume} className="rounded-full bg-[#e2e2e2] p-[5px]"><SimCardDownloadIcon></SimCardDownloadIcon></div>
        </div>
        <TimeLine list={list} />
      </div>
    </section>
  )
}

export default SectionResume
