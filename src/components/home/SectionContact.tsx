'use client'
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { getResume } from '@/const'



const SectionContact = () => {
  const t = useTranslations();

  return <section id='contact' className={
    cn(
      'w-[100%] h-[50vh]',
      'bg-[url("/insung-yoon-tPXZR1lijT0-unsplash.jpg")] bg-cover bg-center bg-no-repeat bg-fixed',
      'flex items-center justify-center'
    )
  } >
    <div className={cn(
      'w-[80%] h-[80%]',
      'flex  items-center justify-center gap-[2%]',
      'text-[#fff] text-[20px]',
      '*:whitespace-nowrap',
      '*:p-[10px] *:bg-[#008fff] *:rounded-[5px] *:cursor-pointer *:shadow-lg *:shadow-[#777777] *:w-[49%] *:text-center'
    )}>
      <div className="">Base In: {t('杭州')}</div>
      <div>Email: baaoshh@gmail.com</div>
      <div onClick={getResume} className='cursor-pointer'>{t('下载简历')}</div>
    </div>


  </section>

}

export default SectionContact