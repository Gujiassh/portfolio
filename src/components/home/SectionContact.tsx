'use client'
import { cn } from '@/lib/utils';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Matter from "matter-js";
import { useEffect, useRef } from 'react';

// 辅助函数：编码 SVG
const encodeSvg = (svgString: string) => {
  return encodeURIComponent(svgString)
    .replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode(parseInt(p1, 16)))
}

// 辅助函数：创建文本框
const createTextBox = (width: number, height: number, text: string, options = {}) => {
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint } =
      Matter;

    // 创建物理引擎
    const engine = Engine.create();
    const { world } = engine;
    const render = Render.create({
      element: containerRef.current,
      engine: engine,
      options: {
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
        wireframes: false,
      },
    });
    // 运行渲染器
    Render.run(render)

    // 创建运行器并启动引擎
    const runner = Runner.create();
    Runner.run(runner, engine);

    const createBoundaries = (width: number, height: number) => {
      return [
        Bodies.rectangle(width / 2, -10, width, 20, { isStatic: true }), // 上边界
        Bodies.rectangle(width / 2, height + 10, width, 20, { isStatic: true }), // 下边界
        Bodies.rectangle(-10, height / 2, 20, height, { isStatic: true }), // 左边界
        Bodies.rectangle(width + 10, height / 2, 20, height, { isStatic: true }), // 右边界
      ];
    };

    let boundaries = createBoundaries(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    Composite.add(world, boundaries);
    // 添加圆块
    for (let i = 0; i < 20; i++) {
      const radius = 30;
      const x = Math.random() * (containerRef.current.clientWidth - radius * 2) + radius;
      const y = Math.random() * (containerRef.current.clientHeight - radius * 2) + radius;
      const circle = Bodies.circle(x, y, radius, {
        restitution: 0.8,
        friction: 0.1,
        density: 0.01,
      });
      Composite.add(world, circle);
    }
    const emailRectangle = Bodies.rectangle(containerRef.current.clientWidth / 2, containerRef.current.clientHeight / 2, 150, 50, {
      render: {
        sprite: {
          texture: createTextBox(220, 50, 'email: baaoshh@gmail.com', {
            backgroundColor: '#4d9fff',
            textColor: 'white',
            fontSize: 14,
            borderRadius: 5
          }),
          xScale: 1,
          yScale: 1
        }
      }
    });
    Composite.add(world, emailRectangle);

    const baseInRectangle = Bodies.rectangle(containerRef.current.clientWidth / 1.5, containerRef.current.clientHeight / 1.5, 100, 50, {
      render: {
        sprite: {
          texture: createTextBox(100, 50, 'base in:  杭州', {
            backgroundColor: '#344966',
            textColor: 'white',
            fontSize: 14,
            borderRadius: 5
          }),
          xScale: 1,
          yScale: 1
        }
      }
    });
    Composite.add(world, baseInRectangle);

    // 添加鼠标交互
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });
    Composite.add(world, mouseConstraint);

    // 监听父元素尺寸变化
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        render.canvas.width = width;
        render.canvas.height = height;
        render.options.width = width;
        render.options.height = height;

        // 移除旧边界
        Composite.remove(world, boundaries);

        // 创建新边界
        boundaries = createBoundaries(width, height);
        Composite.add(world, boundaries);
      }
    });

    resizeObserver.observe(containerRef.current);

    // 清理函数
    return () => {
      resizeObserver.disconnect();
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(world, false);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };

  })
  return <section ref={containerRef} className={
    cn(
      'w-[100%] h-[50vh]',
      'bg-[url("/insung-yoon-tPXZR1lijT0-unsplash.jpg")] bg-cover bg-center bg-no-repeat bg-fixed',
    )
  } >

  </section>




  // <section id='contact' className='h-[30vh] bg-[url("/insung-yoon-tPXZR1lijT0-unsplash.jpg")] bg-cover bg-center bg-no-repeat bg-fixed  text-[#fff]'>

  //   <div className='w-full h-full flex  items-center justify-center'>
  //     <div className="flex justify-around items-center gap-[20px] w-full">
  //       <div>
  //         CONTACT ME
  //       </div>
  //       <div >
  //         baaoshh@gmail.com

  //       </div>
  //     </div>

  //   </div>
  //   <div><LocationOnOutlinedIcon />hz</div>
  // </section>
}

export default SectionContact