"use client"
import gsap from "gsap"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

export default function LineWithBall() {
  const ref = useRef<SVGSVGElement>(null)
  const datasRef = useRef({
    width: 0,
    height: 0,
    ball: [],
    top: 0,
    left: 0,
  }) 
  const LINES = 20
  const BALLS = 20
  const RADIUS = 6
  const MOUSE_RADIUS = 100

  const moveball = (x, y) => {
    const { top, left } = ref.current.getBoundingClientRect()
    const mouse_x = x - left
    const mouse_y = y - top

    datasRef.current.ball.forEach((ball) => {
      const dx = ball.ori_x - mouse_x
      const dy = ball.ori_y - mouse_y
      const distance = Math.sqrt(dx ** 2 + dy ** 2)
      const isInRadius = distance <= MOUSE_RADIUS

      if (isInRadius) {
        ball.move_x = mouse_x + (dx / distance) * MOUSE_RADIUS
        ball.move_y = mouse_y + (dy / distance) * MOUSE_RADIUS
        
        if (ball.animater) {
          ball.animater.kill()
        }
        ball.animater = gsap
          .to(ball, {
            attr: {
              cx: ball.move_x,
              cy: ball.move_y,
            },
            duration: 0.3,
            ease: "power2.out",
          })
        gsap.to(ball.line, {
          attr: {
            x2: ball.move_x,
            y2: ball.move_y,
          },
          duration: 0.3,
          ease: "power2.out",
        })
      } else {
        if (ball.animater) {
          ball.animater.kill()
        }
        ball.animater = gsap
          .to(ball, {
            attr: {
              cx: ball.ori_x,
              cy: ball.ori_y,
            },
            duration: 0.3,
            ease: "power2.out",
          })
        gsap.to(ball.line, {
          attr: {
            x2: ball.ori_x,
            y2: ball.ori_y,
          },
          duration: 0.3,
          ease: "power2.out",
        })
      }
    })
  }
  const createYoyo = (width, height) => {
    for (let xNumber = 0; xNumber < LINES; xNumber++) {
      for (let yNumber = 0; yNumber < BALLS; yNumber++) {
        const x = xNumber * (width / LINES) + RADIUS
        const y = yNumber * (height / BALLS) + RADIUS
        const ball = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        )
        ball.setAttribute("fill", "#17f700")
        ball.setAttribute("cx", x + "")
        ball.setAttribute("cy", y + "")
        ball.setAttribute("r", RADIUS + "")
        ball.ori_x = x
        ball.ori_y = y
        const pointer = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        )
        pointer.setAttribute("fill", "#e2e2e2")
        pointer.setAttribute("cx", x + "")
        pointer.setAttribute("cy", y + "")
        pointer.setAttribute("r", 5 + "")
        const line = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line"
        )
        line.setAttribute("stroke", "#e2e2e2")
        line.setAttribute("fill", "none")
        line.setAttribute("stroke-width", "2")
        line.setAttribute("x1", x + "")
        line.setAttribute("y1", y + "")
        line.setAttribute("x2", x + "")
        line.setAttribute("y2", y + "")
        ball.line = line
        // 按顺序。这样 小球才能在最上方
        ref.current.appendChild(line)
        ref.current.appendChild(pointer)
        ref.current.appendChild(ball)

        datasRef.current.ball.push(ball)
      }
    }
  }

  const resize = () => {
    const { width, height, top, left } = ref.current.getBoundingClientRect()
    datasRef.current.width = width
    datasRef.current.height = height
    datasRef.current.top = top
    datasRef.current.left = left
    return { width, height, top, left }
  }
  useLayoutEffect(() => {
    if (!ref.current) return
    const { width, height } = resize()
    createYoyo(width, height)

    const handleMouseMove = (e: MouseEvent) => {
      moveball(e.clientX, e.clientY)
    }

    document.addEventListener("mousemove", handleMouseMove)
    const handleResize = () => {
      // 重新计算位置
      resize()
    }
    window.addEventListener("resize", handleResize)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return (
    <svg
      className="absolute w-[400px] h-[300px] bottom-0 right-[10px]"
      ref={ref}
    >
      LineWithBall
    </svg>
  )
}
