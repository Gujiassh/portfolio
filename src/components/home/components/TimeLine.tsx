'use client'
import { cn } from '@/lib/utils'
import { motion } from "motion/react"

/**
 * 
 * @returns 
 * 
 * 
 * 
 * 
 


## LEON
### Frontend Developer
 */
export default function TimeLine({ list = [] }: {
  list: {
    id: number,
    mainTitle: string,
    title?: string,
    subTitle?: string,
    description?: string,
  }[]
}) {

  return <div className={cn(
    'w-full',
    'flex flex-col gap-[100px]',
    'justify-center items-center',
    'relative',
    'before:absolute before:w-[2px] before:h-[100%] before:bg-[#f1f1f1] before:top-0 before:left-1/2 before:-translate-x-1/2'
  )}>
    {
      list.map((item, index) => {
        return <motion.div key={item.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className='shadow-2xl flex items-center justify-center rounded-full z-10 relative p-[10px]'
          style={{
            width: '150px',
            height: '150px',
            background: 'linear-gradient(to right, #00beff, #009eff)',
            color: '#fff'
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.9, rotate: 3 }}
        >
          {index % 2 === 0}
          {
            item.mainTitle
          }
          <div className={cn(
            "absolute top-[10%] w-[200%] *:w-[100%]",
            index % 2 === 0 ? 'left-[120%]' : 'right-[120%]'
          )}>
            {item.title && <div className="text-[20px] font-bold text-[#000]">{item.title}</div>}
            {item?.subTitle && <div className="text-[16px] text-[#109af7]">{item?.subTitle}</div>}
            {item.description && <div className="text-[14px] text-[#787878] text-center">{item.description}</div>}
          </div>
        </motion.div>
      })
    }
  </div>
}