'use client'
import Typewriter from '@/fancy/Typewriter'
import { cn, scrollToElement } from '@/lib/utils'
import NeonButton from '../common/NeonButton'
import WaveText from '../common/WaveText'
import { useLocale, useTranslations } from 'next-intl'
import { useMemo } from 'react'
const SectionHome = () => {
  const t = useTranslations()
  const locale = useLocale()

  const selfIntroduction = useMemo(() => {
    const list = [
      t('你好，我是白傲'),
      t('我是一名前端工程师'),
      t("我有三年工作经验"),
    ]

    return locale === 'zh' ? list : list?.map(item => item.toUpperCase())
  }, [locale, t])

  return (
    <section className={
      cn(
        'flex items-center justify-center',
        'h-[100vh]',
        `bg-[url('/wallace-henry-5utisuD5Bdk-unsplash.jpg')]`,
        'bg-cover bg-center bg-no-repeat'
      )
    }
      id="home">
      <div className='text-[#fff] text-center'>
        <div className={`text-[30px]`}>
          <WaveText text={t('欢迎来到我的网站')} className=' font-bold' />
        </div>
        <Typewriter
          text={selfIntroduction}
          speed={70}
          className="text-[40px] font-bold"
          waitTime={1000}
          deleteSpeed={40}
          loop={true}
          cursorChar={"_"}
        />
        <NeonButton className="mt-[40px]" onClick={() => {
          scrollToElement('about')
        }}>
          {t('关于我')}
        </NeonButton>
      </div>
    </section>
  )
}

export default SectionHome 