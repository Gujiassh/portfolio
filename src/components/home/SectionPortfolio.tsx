'use client'
import { cn } from '@/lib/utils'
import { Dialog } from '@mui/material'
import { useState } from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { CardTitle } from './components/CardTitle';
import { PORTFOLIO_DATA } from '@/constants';
import Image from 'next/image'
import NeonButton from '../common/NeonButton';
const SectionPortfolio = () => {

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



  return (
    <section id="portfolio" className="min-h-[95vh] p-[70px] bg-[#f4f4f4]">
      <div className={cn(
        'flex flex-col items-center justify-center'
      )}>
        <div className={cn('flex flex-col items-center justify-center')}>
          <CardTitle title='Portfolio' />
          <div className='text-[#797979] mt-[15px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>
        <div className={cn(
          'w-full',
          'flex gap-[20px]',
          'p-[20px]',
          'grid grid-cols-3 gap-[10px]',
        )}>
          {
            PORTFOLIO_DATA.map(a => {
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
                  >READ MORE</div>
                </div>
                <div className='w-full flex flex-col items-center justify-center py-[10px]'>
                  <div className='text-[18px] font-bold'>{a.name}</div>
                  <div className='text-[14px] px-[10px] text-[#777777]'>{a.description}</div>
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
            <div className='mb-[20px]'>{dialogData.description}</div>
            <Image src={dialogData.imgUrl} alt={dialogData.name} width={500} height={500}></Image>

            <div className='mb-[20px]'>{dialogData.description}</div>
            <NeonButton variant='cyan' onClick={() => {
            }}><a href={dialogData?.projectUrl} target='_blank'>View Project</a></NeonButton>

          </div>
        </div>
      </Dialog>
    </section>
  )
}

export default SectionPortfolio 