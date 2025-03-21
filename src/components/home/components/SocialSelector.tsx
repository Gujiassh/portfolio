"use client"

import { useState } from "react"
import { motion } from "motion/react"

interface XIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

export const GithubIcon: React.FC<XIconProps> = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 98 96"
    className={className}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
    />
  </svg>
)

interface ThreadsIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

export const ThreadsIcon: React.FC<ThreadsIconProps> = ({
  className,
  ...props
}) => (
  <svg
    className={className}
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M32 96l960 0 0 64-960 0 0-64z" p-id="2810"></path>
    <path d="M32 864l960 0 0 64-960 0 0-64z" p-id="2811"></path>
    <path d="M128 192l64 0 0 64-64 0 0-64z" p-id="2812"></path>
    <path d="M224 192l64 0 0 64-64 0 0-64z" p-id="2813"></path>
    <path d="M320 192l64 0 0 64-64 0 0-64z" p-id="2814"></path>
    <path
      d="M384 768l-256 0 0-320 256 0 0 320zM192 704l128 0 0-192-128 0 0 192z"
      p-id="2815"
    ></path>
    <path d="M448 448l224 0 0 64-224 0 0-64z" p-id="2816"></path>
    <path
      d="M1024 352l-1024 0 0-256 1024 0 0 256zM64 288l896 0 0-128-896 0 0 128z"
      p-id="2817"
    ></path>
    <path
      d="M1024 928l-1024 0 0-479.84 64 0 0 415.84 896 0 0-447.264 64 0z"
      p-id="2818"
    ></path>
    <path d="M448 576l448 0 0 64-448 0 0-64z" p-id="2819"></path>
    <path d="M448 704l448 0 0 64-448 0 0-64z" p-id="2820"></path>
  </svg>
)

interface BskyIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

export const BskyIcon: React.FC<BskyIconProps> = ({ className, ...props }) => (
  <svg
    className={className}
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="4120"
  >
    <path
      d="M360.896 183.968L269.984 95.872s-14.208-17.472 9.824-37.248c24.16-19.648 25.376-10.912 33.504-5.472s135.2 130.816 135.2 130.816h-87.616z m301.952 3.264l90.912-88.096s14.208-17.472-9.824-37.248c-24.032-19.648-25.376-10.912-33.504-5.472s-135.2 130.816-135.2 130.816h87.616z m341.152 163.104c-3.264-137.984-123.168-164.192-123.168-164.192s-614.336-4.96-742.496 0C10.176 222.304 20 350.336 20 350.336s1.696 274.272-0.128 413.12c13.824 138.848 120.864 160.928 120.864 160.928s42.72 0.864 73.92 0.864c3.264 8.992 5.696 52.544 54.24 52.544 48.416 0 54.24-52.544 54.24-52.544s354.88-1.696 384.352-1.696c1.696 14.816 8.992 54.976 57.536 54.24 48.416-0.864 51.712-57.536 51.712-57.536s16.384-1.696 65.664 0c114.944-21.376 121.6-156.064 121.6-156.064s-1.568-275.872 0-413.856z m-98.912 439.232c0 21.728-17.248 39.456-38.464 39.456H167.2c-21.248 0-38.464-17.6-38.464-39.456V326.336c0-21.728 17.248-39.456 38.464-39.456h699.424c21.248 0 38.464 17.6 38.464 39.456v463.232zM202.4 457.152l205.344-39.456 15.52 77.184-203.648 39.456z m638.976 0l-205.344-39.456-15.648 77.184 203.776 39.456z m-418.08 191.392s45.152 81.312 95.264-26.336c48.416 105.088 101.824 27.904 101.824 27.904l30.336 19.776s-56.672 91.136-131.424 22.208c-63.232 68.928-129.728-21.952-129.728-21.952l33.728-21.6z"

      p-id="4121"
    ></path>
  </svg>
)


interface EmailIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

export const EmailIcon: React.FC<EmailIconProps> = ({ className, ...props }) => (
  <svg
    className={className}
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M926.47619 355.644952V780.190476a73.142857 73.142857 0 0 1-73.142857 73.142857H170.666667a73.142857 73.142857 0 0 1-73.142857-73.142857V355.644952l304.103619 257.828572a170.666667 170.666667 0 0 0 220.745142 0L926.47619 355.644952zM853.333333 170.666667a74.044952 74.044952 0 0 1 26.087619 4.778666 72.704 72.704 0 0 1 30.622477 22.186667 73.508571 73.508571 0 0 1 10.678857 17.67619c3.169524 7.509333 5.12 15.652571 5.607619 24.210286L926.47619 243.809524v24.380952L559.469714 581.241905a73.142857 73.142857 0 0 1-91.306666 2.901333l-3.632762-2.925714L97.52381 268.190476v-24.380952a72.899048 72.899048 0 0 1 40.155428-65.292191A72.97219 72.97219 0 0 1 170.666667 170.666667h682.666666z"
      p-id="2350"
    ></path>
  </svg>
)


interface Platform {
  name: string
  domain: string
  icon: React.ReactNode
  url: string
}

const platforms: Platform[] = [
  {
    name: "X",
    domain: "github.com",
    icon: <GithubIcon className="h-5 w-5" />,
    url: "https://github.com/Gujiassh",
  },
  {
    name: "Bilibili",
    domain: "bilibili.com",
    icon: <BskyIcon className="h-5 w-5" />,
    url: "https://bilibili.com",
  },
  {
    name: "Threads",
    domain: "post.com",
    icon: <ThreadsIcon className="h-5 w-5" />,
    url: "https://my-blog-front-tau.vercel.app/home",
  },
  {
    name: "Email",
    domain: "baaoshh@gmail.com",
    icon: <EmailIcon className="h-5 w-5" />,
    url: "#",
  },
]

export default function SocialSelector() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>(
    platforms[0]
  )
  const handle = "ryan"

  return (
    <div className="mx-auto my-4 w-full max-w-2xl text-center">
      <div className="space-y-6">
        <div className="flex items-center justify-center">
          <div className="relative flex w-fit items-center justify-center gap-4">
            {platforms.map((platform) => (
              <button
                key={platform.name}
                onClick={() => setSelectedPlatform(platform)}
                className={`relative z-10 cursor-pointer rounded-full p-2 transition-colors ${
                  selectedPlatform.name === platform.name
                    ? "fill-white"
                    : "fill-light-800 hover:bg-black/50 dark:fill-dark-800 hover:fill-white"
                }`}
                aria-label={`Select ${platform.name} platform`}
              >
                {platform.icon}
                <span className="sr-only">{platform.name}</span>
              </button>
            ))}
            <motion.div
              layoutId="background"
              className="bg-black absolute inset-0 z-0 h-9 w-9 rounded-full"
              initial={false}
              animate={{
                x:
                  platforms.findIndex((p) => p.name === selectedPlatform.name) *
                  (36 + 16),
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            />
          </div>
        </div>
        <p className="text-light-900 dark:text-dark-900 text-md">
          Updates on{" "}
          <span className="text-light-900 dark:text-dark-900 font-medium">
            <motion.a
              key={selectedPlatform.domain}
              initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
              transition={{ duration: 0.3 }}
              href={selectedPlatform.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {selectedPlatform.domain}
            </motion.a>
          </span>
          <br />
          <a
            href={selectedPlatform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-950 dark:text-dark-950 font-medium"
          >
            Click → @{handle}
          </a>
        </p>
      </div>
    </div>
  )
}
