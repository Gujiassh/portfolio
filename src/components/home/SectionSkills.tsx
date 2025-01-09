import { cn } from '@/lib/utils'
import NeonButton from '../common/NeonButton'
import CircleProgress from '../common/CircleProgress'

const SectionSkills = () => {
  const skillList = [{
    name: 'HTML',
    process: 90,
    description: 'Lorem ipsum dolor sit amet'
  }, {
    name: 'CSS',
    process: 80,
    description: 'Lorem ipsum dolor sit amet dasds'
  }, {
    name: 'JavaScript',
    process: 70,
    description: 'Lorem ipsum dolor sit amet cxawdf swww'
  }
    , {
    name: 'Photoshop',
    process: 100,
    description: 'Lorem ipsum dolor sit amet cxawdf swww'
  },
  {
    name: 'Photosho12p',
    process: 90,
    description: 'Lorem ipsum dolor sit amet cxawdf swww'
  }
  ]
  return (
    <section id="skills" className="h-[95vh] p-[70px]">
      <div className={cn(
        'flex flex-col items-center justify-center'
      )}>
        <div className={cn('flex flex-col items-center justify-center')}>
          <div className={cn('text-[20px] font-bold border-t-4 border-b-4 border-t-[#000000] border-b-[#109af7]',
            'px-[20px] py-[5px]'
          )}>Skills</div>
          <div className='text-[#797979] mt-[15px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>
        <div className={cn(
          'w-full',
          'flex gap-[30px]',
          'p-[20px]',
          'grid grid-cols-4 gap-4',
        )}>
          {
            skillList.map((a) => {
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