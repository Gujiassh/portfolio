"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useEffect, useState, useRef } from "react"

interface FloatingOrbsProps {
  className?: string;
  color?: string;
  size?: number;
  blur?: number;
  opacity?: number;
  speed?: number;
  range?: number;
}

const FloatingOrbs = ({
  className,
  color = "#4d9fff",
  size = 500,
  blur = 80,
  opacity = 30,
  speed = 3,
  range = 200,
}: FloatingOrbsProps) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [path, setPath] = useState({
    x: [0, 0, 0, 0, 0, 0],
    y: [0, 0, 0, 0, 0, 0],
    scale: [1, 1, 1, 1, 1, 1]
  });

  // 保存上一次路径的最后位置
  const lastPosition = useRef({ x: 0, y: 0 });

  // 生成新的随机路径，从上一次的终点开始
  const generateRandomPath = () => {
    const points = {
      x: [lastPosition.current.x], // 从上一次的终点开始
      y: [lastPosition.current.y],
      scale: [1]
    };

    // 生成新的随机点
    for (let i = 0; i < 5; i++) {
      points.x.push((Math.random() - 0.5) * range * 2);
      points.y.push((Math.random() - 0.5) * range * 2);
      points.scale.push(0.9 + Math.random() * 0.3);
    }

    // 更新最后的位置
    lastPosition.current = {
      x: points.x[points.x.length - 1],
      y: points.y[points.y.length - 1]
    };

    return points;
  };

  const onAnimationComplete = () => {
    setPath(generateRandomPath());
  };

  useEffect(() => {
    setShouldAnimate(true);
    setPath(generateRandomPath());
  }, []);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {shouldAnimate && (
        <motion.div
          className="absolute rounded-full"
          style={{
            width: size,
            height: size,
            backgroundColor: `${color}`,
            opacity: opacity / 100,
            filter: `blur(${blur}px)`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: path.x,
            y: path.y,
            scale: path.scale
          }}
          transition={{
            duration: speed,
            ease: "linear",
          }}
          onAnimationComplete={onAnimationComplete}
        />
      )}
    </div>
  )
}

export default FloatingOrbs 