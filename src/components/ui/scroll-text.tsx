"use client"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

const ScrollingText = ({
  text,
  direction = "left",
}: {
  text: string
  direction?: "left" | "right"
}) => {
  console.log(direction)
  const list = text.split(",")

  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  const [duration, setDuration] = useState(6)

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newWidth = entry.contentRect.width
        if (newWidth > 0) {
          setWidth(newWidth)
        }
      }
    })

    observer.observe(contentRef.current)
    // 初始设置
    const contentWidth = contentRef.current.offsetWidth
    if (contentWidth > 0) {
      setWidth(contentWidth)
    }
    return () => {
      observer.disconnect()
    }
  }, [])


  return (
    <div className="relative overflow-hidden w-full" ref={containerRef}>
      <motion.div
        className={cn("flex whitespace-nowrap w-full text-shadow-lg")}
        initial={{ x: "0%" }}
        animate={{ x: -width * 3 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          fontFamily: "fantasy",
        }}
      >
        <span ref={contentRef}>
          {list.map((t, i) => (
            <span
              style={{
                background: i === 0 ? "red" : "",
              }}
              key={`111-${i}`}
              className="mx-4 font-bold text-[60px]"
            >
              {t}
            </span>
          ))}
        </span>

        {Array(list.length * 8)
          .fill(list)
          .map((a, aIndex) => {
            return (
              <span key={`${aIndex}-x`}>
                {a.map((t, i) => (
                  <span
                    style={{
                      background: i === 0 ? "red" : "",
                    }}
                    key={`first-${i}`}
                    className="mx-4 font-bold text-[60px]"
                  >
                    {t}
                  </span>
                ))}
              </span>
            )
          })}
      </motion.div>
    </div>
  )
}

export default ScrollingText
