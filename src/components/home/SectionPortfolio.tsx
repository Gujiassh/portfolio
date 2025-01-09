'use client'
import { cn } from '@/lib/utils'
import { Dialog } from '@mui/material'
import { useState } from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
const SectionPortfolio = () => {

  const [open, setOpen] = useState(false)
  const [dialogData, setDialogData] = useState({
    name: '',
    description: '',
    imgUrl: ''
  })
  const handleClose = () => {
    setOpen(false)
  }
  const portfolioList = [{
    name: 'SASS',
    description: 'Lorem ipsum dolor sit amet',
    imgUrl: '/jess-bailey-7-b8L0ItAYc-unsplash.jpg'
  },
  {
    name: 'ERP',
    description: 'Lorem ipsum dolor sit amet dasds',
    imgUrl: '/jess-bailey-7-b8L0ItAYc-unsplash.jpg'
  },
  {
    name: 'GGC',
    description: 'Lorem ipsum dolor sit amet cxawdf swww',
    imgUrl: '/jess-bailey-7-b8L0ItAYc-unsplash.jpg'
  },
  {
    name: 'GV',
    description: 'Lorem ipsum dolor sit amet cxawdf swww',
    imgUrl: '/jess-bailey-7-b8L0ItAYc-unsplash.jpg'
  },
  {
    name: 'GVc',
    description: 'Lorem ipsum dolor sit amet cxawdf swww',
    imgUrl: '/jess-bailey-7-b8L0ItAYc-unsplash.jpg'
  },
  {
    name: 'GVccsa',
    description: 'Lorem ipsum dolor sit amet cxawdf swww',
    imgUrl: '/jess-bailey-7-b8L0ItAYc-unsplash.jpg'
  }
  ]


  return (
    <section id="portfolio" className="min-h-[95vh] p-[70px] bg-[#f4f4f4]">
      <div className={cn(
        'flex flex-col items-center justify-center'
      )}>
        <div className={cn('flex flex-col items-center justify-center')}>
          <div className={cn('text-[20px] font-bold border-t-4 border-b-4 border-t-[#000000] border-b-[#109af7]',
            'px-[20px] py-[5px]'
          )}>Portfolio</div>
          <div className='text-[#797979] mt-[15px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>
        <div className={cn(
          'w-full',
          'flex gap-[20px]',
          'p-[20px]',
          'grid grid-cols-3 gap-[10px]',
        )}>

          {
            portfolioList.map(a => {
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
          <div className='p-[40px] flex items-center justify-center'>
            {dialogData.description}
          </div>
        </div>
      </Dialog>
    </section>
  )
}

export default SectionPortfolio 