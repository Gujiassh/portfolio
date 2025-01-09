'use client'
import { motion } from "framer-motion"
import FloatingOrbs from "@/components/common/FloatingOrbs"

//bg-gradient-to-r from-[#00c1ff] to-[#007aff] 
const SectionHire = () => {
  return (
    <section className='relative h-[20vh] w-full bg-[#017bfe]'>
      <FloatingOrbs
        speed={10}         // 速度调小一点
        size={500}
        color="#fff"
        opacity={80}      // 添加透明度
        blur={80}         // 添加模糊
        className="absolute inset-0" />

      <div className='relative z-20 h-full w-full flex justify-around items-center'>
        <div className='text-[#fff]'>
          HELLO HELLO HELLO HELLO
        </div>
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className='text-[18px] border-2 border-[#fff] px-4 py-2 text-[#fff] cursor-pointer hover:bg-[#fff] hover:text-[#008fff] transition-all duration-300'>
          HIRE ME
        </motion.div>
      </div>
    </section>
  )
}

export default SectionHire