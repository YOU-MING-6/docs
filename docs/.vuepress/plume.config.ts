// 用户配置
import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { collections } from './collections'

export default defineThemeConfig({
  logo: '/rc/docs.png',
  appearance: true,
  profile: {
    name: 'YOU MING 柚明',
    description: '一个不知名创作者',
    avatar: '/rc/ym.png',
    location: '中国',
    organization: 'Youming 工作室',
    circle: true, // 是否为圆形头像
    layout: 'right', // 个人信息在左侧还是右侧，'left' | 'right'
  },
  // 社交链接
  social: [
    { icon: 'bilibili', link: 'https://space.bilibili.com/1337092956' },
    { icon: 'qq', link: '链接.html#qq' },
    { icon: 'github', link: 'https://github.com/YOU-MING-6/docs' },
    ],
  navbarSocialInclude: ['github', 'qq', 'bilibili'], // 导航栏社交链接

  footer: {
    message: 'Powered by <a href="https://theme-plume.vuejs.press/" target="_blank">vuepress-theme-plume</a> | <a href="https://icp.gov.moe/?keyword=20250036" target="_blank">萌ICP备20250036号</a> | <a href="https://docs.youming.v6.army" target="_blank">域名①</a> <a href="https://docs.youming.us.ci" target="_blank">分发域名②</a> <a href="https://docs.youming.dpdns.org" target="_blank">分发域名③</a>',
    copyright: '<a href="/notes/YM-站点监控.html">YM-站点监控</a> | Copyright © 2023-present <a href="/notes/更多/工作室.html">Youming 工作室</a>'
  },
  
  navbar,
  collections
})
