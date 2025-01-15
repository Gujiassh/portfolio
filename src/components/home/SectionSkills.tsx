import { cn } from '@/lib/utils'
import NeonButton from '../common/NeonButton'
import CircleProgress from '../common/CircleProgress'
import { CardTitle } from './components/CardTitle'
import { SKILLS_DATA } from '@/constants'

const SectionSkills = () => {

  return (
    <section id="skills" className="h-[95vh] p-[70px]">
      <div className={cn(
        'flex flex-col items-center justify-center'
      )}>
        <div className={cn('flex flex-col items-center justify-center')}>

          <CardTitle title='Skills' />
          <div className='text-[#797979] mt-[15px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>
        <div className={cn(
          'w-full',
          'flex gap-[30px]',
          'p-[20px]',
          'grid grid-cols-4 gap-4',
        )}>
          {
            SKILLS_DATA.map((a) => {
              return <div
                key={a.name}
                className='flex flex-col items-center justify-center'>
                <CircleProgress
                  progress={a.process}
                  size={100}
                  strokeWidth={10}
                  color="#109af7"
                />
                <div className='text-[14px] mt-[10px]'>{
                  a.description
                }</div>
              </div>
            })
          }


        </div>
      </div>
    </section>
  )
}

export default SectionSkills 