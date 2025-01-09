import { cn } from '@/lib/utils'
import NeonButton from '../common/NeonButton'
import VariableFontHoverByRandomLetter from '@/fancy/VariableFontHoverByRandomLetter'
import LetterSwapForward from '@/fancy/LetterSwapForward'

const SectionAbout = () => {
  return (
    <section id="about" className="h-[95vh] p-[70px] bg-[#f4f4f4]">

      <div className={cn(
        'flex flex-col items-center justify-center'
      )}>
        <div className={cn('flex flex-col items-center justify-center')}>

          <div className={cn('text-[20px] font-bold border-t-4 border-b-4 border-t-[#000000] border-b-[#109af7]',

            'px-[20px] py-[5px]'
          )}> About </div>
          <div className='text-[#797979] mt-[15px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>
        <div className={cn(
          'flex gap-[30px]',
          'p-[20px]'
        )}>
          <div className={cn(
            'rounded-full',
            `bg-[url('/202410151270095361364594688.jpg')]`,
            'bg-cover bg-center bg-no-repeat',
            'w-[300px] h-[300px]',
            'border-[5px] border-[#f4f4f4]'
          )}></div>
          <div className='flex-1'>
            <div className={'font-bold text-[#109af7] text-[20px]'}>RYAN</div>
            <div className="text-[18px] ">Front end Developer</div>
            <div className='mt-[20px] text-[#777] text-[14px] flex flex-col gap-[10px]'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat laborum perferendis nulla illum sunt atque quidem ut, dolor. Suscipit blanditiis commodi a soluta itaque quae omnis, velit voluptas voluptatum repudiandae.</p>

              <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est iste incidunt, et nam pariatur sit totam quos id ex dolorem deleniti, autem tempore eaque dolores quibusdam obcaecati, veritatis mollitia consequuntur.</p>
            </div>
            <NeonButton className="mt-[20px]" variant='cyan'>
              DOWNLOAD
            </NeonButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionAbout 