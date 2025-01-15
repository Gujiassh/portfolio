'use client'
import { cn } from '@/lib/utils';
import Matter from "matter-js";
import { useEffect, useRef } from 'react';

// 辅助函数：编码 SVG
const encodeSvg = (svgString: string) => {
  return encodeURIComponent(svgString)
    .replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode(parseInt(p1, 16)))
}

// 辅助函数：创建文本框
const createTextBox = (width: number, height: number, text: string, options: {
  backgroundColor?: string,
  textColor?: string,
  fontSize?: number,
  borderRadius?: number
} = {}) => {
  const {
    backgroundColor = '#4d9fff',
    textColor = 'white',
    fontSize = 14,
    borderRadius = 5
  } = options;

  const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <rect 
        width="${width}" 
        height="${height}" 
        rx="${borderRadius}" 
        fill="${backgroundColor}"
      />
      <text 
        x="${width / 2}" 
        y="${height / 2 + fontSize / 3}" 
        text-anchor="middle" 
        font-family="Arial" 
        font-size="${fontSize}" 
        fill="${textColor}">
        ${text}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;base64,${btoa(encodeSvg(svgString))}`;
}

const SectionContact = () => {


  return <section className={
    cn(
      'w-[100%] h-[50vh]',
      'bg-[url("/insung-yoon-tPXZR1lijT0-unsplash.jpg")] bg-cover bg-center bg-no-repeat bg-fixed',
      'flex items-center justify-center'
    )
  } >
    <div className={cn(
      'w-[50%] h-[80%]',
      'flex  items-center justify-center gap-[2%]',
      'text-[#fff] text-[20px]',
      '*:p-[10px] *:bg-[#008fff] *:rounded-[5px] *:cursor-pointer *:shadow-lg *:shadow-[#777777] *:w-[49%] *:text-center'
    )}>
      <div className="">xxx skdkj</div>
      <div>em dsjhvdfdlfkjd</div>
      <div>ecxssd</div>
    </div>


  </section>

}

export default SectionContact