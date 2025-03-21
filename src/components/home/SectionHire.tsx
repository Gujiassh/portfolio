'use client'
import { motion } from "framer-motion"
import FloatingOrbs from "@/components/common/FloatingOrbs"
import { useTranslations } from 'next-intl';
import { scrollToElement } from '@/lib/utils';

//bg-gradient-to-r from-[#00c1ff] to-[#007aff] 
const SectionHire = () => {
  const t = useTranslations();
  return (
    <section className='relative bg-[#017bfe]'>
      <FloatingOrbs
        speed={10}         // 速度调小一点
        size={500}
        color="#fff"
        opacity={80}      // 添加透明度
        blur={80}         // 添加模糊
        className="absolute inset-0" />

      <div className='relative z-20 h-full w-full flex justify-around items-center'>
        <div className='text-[#fff] text-[20px] font-bold'>
          {t('目前有空接受工作机会')}
        </div>
        <motion.div
          onClick={() => {
            scrollToElement('contact')
          }
          }
          drag
          whileDrag={{ scale: 1.2, }}
          whileHover={{
            scale: 1.05,
          }}
          className='text-[18px] border-2 border-[#fff] px-4 py-2 text-[#fff] cursor-pointer hover:bg-[#fff] hover:text-[#008fff] transition-all duration-300'>
          {t('联系我')}
        </motion.div>
      </div>
    </section>
  )
}

export default SectionHire