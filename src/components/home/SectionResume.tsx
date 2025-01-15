'use client'
import { cn } from '@/lib/utils'
import { CardTitle } from './components/CardTitle'
import TimeLine from './components/TimeLine'

const SectionResume = () => {

  return (
    <section id="resume" className="p-[70px]">
      <div className={cn(
        'flex flex-col items-center justify-center'
      )}>
        <div className={cn('flex flex-col items-center justify-center mb-[20px]')}>
          <CardTitle title='Resume' />
          <div className='text-[#797979] mt-[15px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>

        <TimeLine />
      </div>
    </section>
  )
}

export default SectionResume 