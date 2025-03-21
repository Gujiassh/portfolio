'use client'

import { useEffect, useState } from 'react'
import { cn, } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { NAV_ITEMS } from '@/constants'
import InternationalIcon from '../../public/international.svg'
import { motion } from 'motion/react'

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations()
  const locale = useLocale()
  const switchLanguage = (locale: string) => {
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${locale}`)
    router.push(newPath)
  }

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "flex justify-between items-center fixed top-0 left-0 right-0 z-50",
      "transition-all duration-500 delay-100",
      isScrolled
        ? "py-[15px] px-[25px] bg-[#fff] border-b-[1px] shadow-sm" :
        "py-[30px] px-[40px] text-[#fff]"
    )}>
      <div className="border-[#109af7] border-[5px] text-[18px] py-[5px] px-[15px] cursor-pointer">
        {t('白傲')}
      </div>
      <div className="flex gap-[10px]">
        <ul className="flex gap-[10px]">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.url}
              className={cn(
                "font-bold",
                "text-[16px] cursor-pointer",
                "hover:text-[#109af7]"
              )}
              // onClick={() => scrollToElement(item.url)}
            >
              {t(item.title)}
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <motion.div className={cn(
            'cursor-pointer',
          )}
            initial={{ scale: 1, rotate: 0 }}
            whileHover={{
              scale: [0.8, 1.8, 1.5],
              rotate: [0, 45, 0],
              transition: {
                scale: {
                  type: "spring",
                  stiffness: 290,
                  damping: 15,
                  mass: 2,
                },
                rotate: {
                  duration: 0.3,
                  times: [0, 0.5, 1]
                },
              },
            }}
            onClick={() => {
              const currentLocale = locale
              switchLanguage(currentLocale === 'zh' ? 'en' : 'zh')
            }}
          > <InternationalIcon
              width={25}
              height={25}
              fill={isScrolled ? "#000" : "#fff"}
            />
          </motion.div>
        </div>
      </div>
    </header >
  )
}

export default Header 