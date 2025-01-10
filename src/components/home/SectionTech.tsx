'use client'
import { motion } from 'motion/react'

const SectionTech = () => {
  const techList = [
    {
      name: 'React',
    },
    {
      name: 'Next'
    },
    {
      name: 'TypeScript',
    },
    {
      name: 'Motion'
    },
    {
      name: 'Matter'
    },
    {
      name: 'Tailwind Css'
    }
  ]
  return <section id='tech' className="w-full h-[30vh]  p-[40px] overflow-hidden flex items-center justify-center bg-[#f4f4f4] relative">
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="absolute left-5 top-5 border-2 border-[#00a3ff] text-[#00a3ff] text-[16px] px-3 py-1 cursor-pointer">
      生产现场撒
    </motion.div>
    <motion.div className='flex gap-3 items-center absolute' animate={{
      translateX: [0, '50%'],
      transition: {
        duration: 10,
        ease: 'linear',
        repeat: Infinity,
        repeatType: "reverse"
      }
    }}>
      {
        techList.map(a => {
          return <div key={a.name} className=" bg-white p-3 flex items-center justify-center font-bold">
            {a.name}
          </div>
        })
      }
    </motion.div>
  </section>
}

export default SectionTech