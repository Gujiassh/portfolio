'use client'
import { cn } from '@/lib/utils'
import { CardTitle } from './components/CardTitle'
import TimeLine from './components/TimeLine'
import { useTranslations } from 'next-intl'
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
const SectionResume = () => {
  const t = useTranslations()
  const list = [
    {
      id: 1,
      mainTitle: t('学历'),
    },
    {
      id: 2,
      mainTitle: t('xx大学'),
      title: t('2018~2022'),
      subTitle: t('本科'),
      description: t('学历简介'),
    },
    {
      id: 3,
      mainTitle: t('工作经历'),
    },
    {
      id: 4,
      mainTitle: t('杭州某科技有限公司'),
      title: t('2022~至今'),
      subTitle: t('前端工程师'),
      description: t('工作经历简介'),
    }
  ]
  return (
    <section id="resume" className="p-[70px]">
      <div className={cn(
        'flex flex-col items-center justify-center'
      )}>
        <div className={cn('flex flex-col items-center justify-center mb-[20px]')}>
          <CardTitle title={t('个人履历')} />
          <div
            className='text-[#797979] mt-[15px] flex items-center justify-center gap-[10px]'>
            {t('个人履历简介')}
            <span className='cursor-pointer hover:text-[#008fff]'>
              <SimCardDownloadIcon></SimCardDownloadIcon>
            </span></div>
        </div>

        <TimeLine list={list} />
      </div>
    </section>
  )
}

export default SectionResume 