'use client'
import { cn } from '@/lib/utils'
import NeonButton from '../common/NeonButton'
import CircleProgress from '../common/CircleProgress'
import { useMotionValue, motion, animate, useTransform } from "motion/react"
import TimeLine from './components/TimeLine'
import { useEffect } from 'react'

const SectionResume = () => {

  return (
    <section id="resume" className="p-[70px]">
      <div className={cn(
        'flex flex-col items-center justify-center'
      )}>
        <div className={cn('flex flex-col items-center justify-center mb-[20px]')}>
          <div className={cn('text-[20px] font-bold border-t-4 border-b-4 border-t-[#000000] border-b-[#109af7]',
            'px-[20px] py-[5px]'
          )}>Resume</div>
          <div className='text-[#797979] mt-[15px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>

        <TimeLine />
        {/* <div className={cn(
          'w-full',
          'flex gap-[30px]',
          'p-[20px]',
          'grid grid-cols-4 gap-4',
        )}>
         


        </div> */}
      </div>
    </section>
  )
}

export default SectionResume 