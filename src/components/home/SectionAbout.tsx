'use client'
import { cn } from '@/lib/utils'
import NeonButton from '../common/NeonButton'

import { motion } from 'motion/react'
import { CardTitle } from './components/CardTitle'
import { useTranslations } from 'next-intl'

const SectionAbout = () => {

  const t = useTranslations()
  return (
    <section id="about" className="h-[100vh] p-[70px] bg-[#f4f4f4]">

      <div className={cn(
        'flex flex-col items-center justify-center'
      )}>
        <div className={cn('flex flex-col items-center justify-center')}>
          <CardTitle title={t('关于我')} />
          <div className='text-[#797979] mt-[15px]'>{t('前端开发让我着迷因为它是连接用户与技术的桥梁')}</div>
        </div>
        <div className={cn(
          'flex gap-[30px]',
          'p-[20px]'
        )}>
          <motion.div
            whileHover={{
              scale: 1.1, cursor: "pointer"
            }}
            whileTap={{ scale: 0.9 }}
            transition={{
              duration: 0.2, ease: 'easeInOut'
            }}
            className={cn(
              'rounded-full',
              `bg-[url('/c39c60f1b6691504d32c9e66795af65.jpg')]`,
              'bg-cover bg-center bg-no-repeat',
              'w-[300px] h-[300px]',
              'border-[5px] border-[#f4f4f4]'
            )}></motion.div>

          <div className='flex-1'>
            <div className={'font-bold text-[#109af7] text-[20px]'}>{t('白傲')}</div>
            <div className="text-[18px] ">{t('前端工程师')}</div>
            <div className='mt-[20px] text-[#777] text-[14px] flex flex-col gap-[10px]'>
              <p>{t('自我介绍1')}</p>
              <p>{t('自我介绍2')}</p>
              <p>{t('自我介绍3')}</p>
            </div>
            <NeonButton className="mt-[20px]" variant='cyan'>
              {t('下载简历')}
            </NeonButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionAbout 