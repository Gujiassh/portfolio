'use client'

import NumberTicker from '@/fancy/NumberTicker'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

interface CircleProgressProps {
  progress: number  // 0-100的进度值
  size?: number     // 圆的大小
  strokeWidth?: number  // 圆环的粗细
  color?: string    // 进度条颜色
  bgColor?: string  // 背景圆环颜色
}

const CircleProgress: React.FC<CircleProgressProps> = ({
  progress,
  size = 100,
  strokeWidth = 8,
  color = "#109af7",
  bgColor = "#e6e6e6"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  // 计算圆的各种参数
  const center = size / 2
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const progressOffset = circumference - (progress / 100) * circumference

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false);
          // 使用短暂延迟来确保状态重置
          setTimeout(() => setIsVisible(true), 100);
        }
      },
      { threshold: 0.1 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={cn('relative', `w-[${size}px] h-[${size}px]`)} ref={componentRef}>
      <svg width={size} height={size}>
        {/* 背景圆环 */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={bgColor}
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* 进度圆环 */}
        {isVisible && (
          <motion.circle
            cx={center}
            cy={center}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: progressOffset }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              strokeDasharray: circumference,
              rotate: "-90deg",
              transformOrigin: "center",
            }}
          />
        )}
      </svg>

      {/* 中间的进度文字 */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ color }}
      >
        {isVisible && (
          <NumberTicker
            from={0}
            target={progress}
            autoStart={true}
            transition={{ duration: 2, type: "tween", ease: "easeInOut" }}
          />
        )}
        %
      </div>
    </div>
  )
}

export default CircleProgress 