interface ISkillItem {
  name: string,
  process: number,
  description: string
}

export const SKILLS_DATA: ISkillItem[] = [{
  name: 'HTML',
  process: 90,
  description: 'Lorem ipsum dolor sit amet'
}, {
  name: 'CSS',
  process: 80,
  description: 'Lorem ipsum dolor sit amet dasds'
}, {
  name: 'JavaScript',
  process: 70,
  description: 'Lorem ipsum dolor sit amet cxawdf swww'
},
{
  name: 'Photoshop',
  process: 100,
  description: 'Lorem ipsum dolor sit amet cxawdf swww'
},
{
  name: 'Photosho12p',
  process: 90,
  description: 'Lorem ipsum dolor sit amet cxawdf swww'
}
]

interface IPortfolioItem {
  name: string,
  description: string,
  imgUrl: string,
  projectUrl?: string
}
export const PORTFOLIO_DATA: IPortfolioItem[] = [{
  name: 'SASS',
  description: 'Lorem ipsum dolor sit amet',
  imgUrl: '/jess-bailey-7-b8L0ItAYc-unsplash.jpg',
  projectUrl: 'https://www.baidu.com'
},
{
  name: 'ERP',
  description: 'Lorem ipsum dolor sit amet dasds',
  imgUrl: '/jess-bailey-7-b8L0ItAYc-unsplash.jpg'
},
{
  name: 'GGC',
  description: 'Lorem ipsum dolor sit amet cxawdf swww',
  imgUrl: '/jess-bailey-7-b8L0ItAYc-unsplash.jpg'
},
{
  name: 'GV',
  description: 'Lorem ipsum dolor sit amet cxawdf swww',
  imgUrl: '/jess-bailey-7-b8L0ItAYc-unsplash.jpg'
},
{
  name: 'GVc',
  description: 'Lorem ipsum dolor sit amet cxawdf swww',
  imgUrl: '/jess-bailey-7-b8L0ItAYc-unsplash.jpg'
},
{
  name: 'GVccsa',
  description: 'Lorem ipsum dolor sit amet cxawdf swww',
  imgUrl: '/jess-bailey-7-b8L0ItAYc-unsplash.jpg'
}
]

interface INavItem {
  title: string,
  url: string,
  isPage: boolean
}
export const NAV_ITEMS: INavItem[] = [
  {
    title: '关于',
    url: 'about',
    isPage: false,
  },
  {
    title: '技能',
    url: 'skills',
    isPage: false,
  },
  {
    title: '项目',
    url: 'portfolio',
    isPage: false,
  },
  {
    title: '简历',
    url: 'resume',
    isPage: false,
  },
]
