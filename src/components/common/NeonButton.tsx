import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'blue' | 'cyan'
}

const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = 'blue', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'group relative px-8 py-3',
          'font-semibold tracking-wider uppercase',
          'overflow-hidden',
          // 主按钮样式 - 文字始终保持白色
          'text-white border-2 border-white',
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
      </button>
    )
  }
)

NeonButton.displayName = 'NeonButton'

export default NeonButton