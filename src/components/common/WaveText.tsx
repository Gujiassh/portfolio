'use client'

import { cn } from '@/lib/utils'
import { motion } from 'motion/react'

interface WaveTextProps {
  text: string
  className?: string
}

const WaveText = (props: WaveTextProps) => {
  const { text, className } = props


  return <span className={cn(className)}>
    {text.split('').map((char, index) => (
      <motion.span animate={{
        translateX: [50, 0],
        translateY: [50, 0],
        opacity: [0, 1],
        transition: {
          delay: index * 0.1,
          duration: 0.5,
          ease: "easeInOut",
        }
      }} key={index} className='inline-block'>
        {char}
      </motion.span>
    ))}
  </span>
}

export default WaveText