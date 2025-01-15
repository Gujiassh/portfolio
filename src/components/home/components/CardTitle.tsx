import { cn } from "@/lib/utils"

export const CardTitle = ({ title }: { title: string, }) => {

  return (
    <div className={
      cn(
        'text-[20px] font-bold border-t-4 border-b-4 border-t-[#000000] border-b-[#109af7]',
        'px-[20px] py-[5px]'
      )
    }>
      {title}
    </div>
  )
}