'use client'
import { cn } from '@/lib/utils'
import NeonButton from '../common/NeonButton'
import CircleProgress from '../common/CircleProgress'
import { motion } from "motion/react"

const SectionResume = () => {

  return (
    <section id="resume" className="h-[95vh] p-[70px]">
      <div className={cn(
        'flex flex-col items-center justify-center'
      )}>
        <div className={cn('flex flex-col items-center justify-center')}>
          <div className={cn('text-[20px] font-bold border-t-4 border-b-4 border-t-[#000000] border-b-[#109af7]',
            'px-[20px] py-[5px]'
          )}>Resume</div>
          <div className='text-[#797979] mt-[15px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>

        <motion.div
          animate={
            {
              scale: [1, 2, 1, 2, 1,],
              rotate: [0, 360, 0, 360, 0],
              borderRadius: ['0', '8px', '15px', '8px', '0'],

            }
          }
          transition={{
            duration: 10,
            ease: 'easeInOut',
            repeat: Infinity,
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
            repeatDelay: 1
          }}
          style={{
            height: '100px',
            width: '100px',
            backgroundColor: '#ffddd2',

          }}
        >

        </motion.div>
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