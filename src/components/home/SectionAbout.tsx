import { cn } from '@/lib/utils'

const SectionAbout = () => {
  return (
    <section id="about" className="h-[95vh] p-[70px]">
      <div className={cn(
        'flex flex-col items-center justify-center'
      )}>
        <div className={cn('flex flex-col items-center justify-center')}>
          <div className={cn('text-[20px] font-bold border-t-4 border-b-4 border-t-[#000000] border-b-[#109af7]',

            'px-[20px] py-[5px]'
          )}>About</div>
          <div className='text-[#797979] mt-[15px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>
        <div>
          <div>头</div>
          <div>内容</div>
        </div>
      </div>
    </section>
  )
}

export default SectionAbout 