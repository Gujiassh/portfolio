'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const Header = () => {
  const nvaList = [
    {
      title: '关于',
      url: 'about',
      isPage: false,
    },
    {
      title: '技能',
      url: 'skills',
      isPage: false,
    },
    {
      title: '文件夹',
      url: 'portfolio',
      isPage: false,
    },
    {
      title: '服务',
      url: 'services',
      isPage: false,
    },
    {
      title: '项目',
      url: 'projects',
      isPage: false,
    },
    {
      title: 'resume',
      url: 'resume',
      isPage: false,
    },
  ]
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    const header = document.querySelector('header');

    if (element && header) {
      const headerHeight = header.offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth'
      });
    }
  };
  return (
    <header className={cn(
      "flex justify-between items-center fixed top-0 left-0 right-0 z-50",
      "transition-all duration-500 delay-100",
      isScrolled
        ? "py-[15px] px-[25px] bg-[#fff] border-b-[1px] shadow-sm" :
        "py-[30px] px-[40px] text-[#fff]"
    )}>
      <div className="border-[#109af7] border-[5px] text-[18px] py-[5px] px-[15px] cursor-pointer">
        RYAN
      </div>
      <ul className="flex gap-[10px]">
        {nvaList.map((item) => (
          <li
            key={item.url}
            className={cn(
              isScrolled ? "font-serif" : "font-bold",
              "text-[16px] cursor-pointer",
              "hover:text-[#109af7]"
            )}
            onClick={() => scrollToElement(item.url)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header 