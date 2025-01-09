import Typewriter from '@/fancy/Typewriter'
import { cn } from '@/lib/utils'
import NeonButton from '../common/NeonButton'
const SectionHome = () => {
  return (
    <section className={
      cn(
        'flex items-center justify-center',
        'h-[95vh]',
        `bg-[url('/wallace-henry-5utisuD5Bdk-unsplash.jpg')]`,
        'bg-cover bg-center bg-no-repeat'
      )
    }
      id="home">
      <div className='text-[#fff] text-center'>
        <div className={`text-[30px]`}>WELCOME TO IMILE</div>
        <Typewriter
          text={[
            'LORG CSKKSPC PDLCMSCC'
          ]}
          speed={70}
          className="text-[40px] font-bold"
          waitTime={1000}
          deleteSpeed={40}
          loop={true}
          cursorChar={"_"}
        />
        <NeonButton className="mt-[40px]">
          ABOUT ME
        </NeonButton>
      </div>
    </section>
  )
}

export default SectionHome 