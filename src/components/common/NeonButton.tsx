'use client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'blue' | 'cyan'
}

const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = 'blue', children, ...props }, ref) => {
    return (
      <motion.button
        drag
        whileDrag={{ scale: 1.2, }}
        ref={ref}
        whileHover={{
          scale: 1.05,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          'group relative px-8 py-3',
          'font-semibold tracking-wider uppercase',
          'overflow-hidden',
          ' border-2',
          // 主按钮样式 - 文字始终保持白色
          'text-white border-white',
          'transition-colors duration-300',
          // 扫光效果容器
          'before:absolute before:inset-0',
          'before:transition-transform before:duration-500',
          'before:translate-x-[-150%]',
          'hover:before:translate-x-0',
          'before:bg-gradient-to-r',
          'before:blur-[2px]',
          {
            // 蓝色变体
            'hover:bg-gradient-to-r hover:from-[#00c3ff] hover:to-[#0077ff] hover:bg-[length:200%_100%]': variant === 'blue',
            'before:from-[#00c3ff] before:to-[#0077ff]': variant === 'blue',
            // 青色变体
            'hover:bg-[#00ffff]': variant === 'cyan',
            'before:from-[#00ffff] before:to-[#00ffff]': variant === 'cyan',
            'text-[#109af7] border-[#109af7]': variant === 'cyan',
          },
          // 边框动画
          'after:absolute after:inset-0',
          'after:border-2',
          'after:transition-transform after:duration-700',
          'after:scale-x-[1.2] after:scale-y-[1.3]',
          'after:opacity-0',
          'hover:after:scale-x-100 hover:after:scale-y-100',
          'hover:after:opacity-100',
          {
            'after:border-[#00c3ff]': variant === 'blue',
            'after:border-[#00ffff]': variant === 'cyan',
          },
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </motion.button>
    )
  }
)

NeonButton.displayName = 'NeonButton'

export default NeonButton