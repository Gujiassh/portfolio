




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
