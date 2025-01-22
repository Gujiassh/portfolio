'use client'
import { cn } from '@/lib/utils'
import { Dialog } from '@mui/material'
import { useState } from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { CardTitle } from './components/CardTitle';
import Image from 'next/image'
import NeonButton from '../common/NeonButton';
import { useTranslations } from 'next-intl';
import { Tooltip } from '@mui/material';
const SectionPortfolio = () => {
  const t = useTranslations();

  const [open, setOpen] = useState(false)
  const [dialogData, setDialogData] = useState({
    name: '',
    description: '',
    imgUrl: '',
    projectUrl: ''
  })
  const handleClose = () => {
    setOpen(false)
  }
  const portfolioData = [{
    name: t('采购系统'),
    description: t('采购系统简介'),
    imgUrl: '/purchase.jpg',
  },
  {
    name: t('开发者平台后台'),
    description: t('开发者平台后台简介'),
    imgUrl: '/developer.jpg'
  },
  {
    name: t('组件库开发'),
    description: t('组件库开发简介'),
    imgUrl: '/ui-component.jpg'
  },

  ]


  return (
    <section id="portfolio" className=" p-[70px] bg-[#f4f4f4]">
      <div className={cn(
        'flex flex-col items-center justify-center'
      )}>
        <div className={cn('flex flex-col items-center justify-center')}>
          <CardTitle title='Portfolio' />

        </div>
        <div className={cn(
          'w-full',
          'flex gap-[20px]',
          'p-[20px]',
          'grid grid-cols-3 gap-[10px]',
        )}>
          {
            portfolioData.map(a => {
              return <div key={a.name} className="bg-[#ffffff]">
                <div
                  style={{
                    backgroundImage: `url(${a.imgUrl})`
                  }}
                  className={cn(
                    'w-full h-[200px]',
                    'bg-cover bg-center bg-no-repeat',
                    'relative',
                    'before:absolute before:bg-[#000000] before:opacity-0 before:inset-0 before:z-10 before:transition-all before:duration-300 before:ease-in-out',
                    'hover:before:opacity-50',
                    'transition-all duration-300',
                    'cursor-pointer',
                    'group'
                  )}>

                  <div className={cn(
                    'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20',
                    'border-2 border-[#fff] px-[10px] py-[5px]',
                    'text-[#fff] text-[14px] font-bold',
                    'transition-all duration-300',
                    'hover:bg-[#fff] hover:text-[#000000]',
                    'group-hover:opacity-100 opacity-0'
                  )}
                    onClick={() => {
                      setDialogData(a)
                      setOpen(true)
                    }}
                  >{t('查看更多').toUpperCase()}</div>
                </div>
                <div className='w-full flex flex-col items-center justify-center p-[10px] text-ellipsis text-nowrap overflow-hidden '>
                  <div className='p-[10px] w-full text-[18px] font-bold text-ellipsis text-nowrap overflow-hidden '>
                    <Tooltip title={a?.name}>
                      {a?.name}
                    </Tooltip>
                  </div>
                  <div className='text-[14px] px-[10px] text-[#777777] text-ellipsis text-nowrap overflow-hidden w-full'>
                    <Tooltip title={a?.description}>
                      {a?.description}
                    </Tooltip>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
      >
        <div className='w-full h-full'>
          <div className="flex justify-end">
            <CloseOutlinedIcon fontSize='large'
              onClick={handleClose}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  color: '#3a80b6'
                }
              }}></CloseOutlinedIcon></div>
          <div className='p-[40px] flex flex-col items-center justify-center'>
            <div className='mb-[20px] text-[24px] font-bold text-center'>{dialogData.name}</div>
            <Image src={dialogData.imgUrl} alt={dialogData.name} width={500} height={500}></Image>

            <div className='my-[20px]'>{dialogData.description}</div>
            {
              dialogData.projectUrl && <NeonButton variant='cyan' onClick={() => {
              }}><a href={dialogData?.projectUrl} target='_blank'>{t('跳转到项目')}</a></NeonButton>
            }

          </div>
        </div>
      </Dialog>
    </section>
  )
}

export default SectionPortfolio 