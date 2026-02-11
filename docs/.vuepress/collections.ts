// 文章集合
import { defineCollection, defineCollections } from 'vuepress-theme-plume'

export const demoNotes = defineCollection({
  type: 'doc',
  dir: 'notes/',
  title: '作品文档',
  linkPrefix: '/notes/',
  sidebar: [
    {
      text: '作品文档',
      prefix: '',
      items: [
        { text: '导航', link: '/notes/'},
        {
          text: 'YM-软件工具',
          icon: 'mingcute:book-line',
          collapsed: false,
          prefix: '',
          items: [
            { text: 'MC 鼠标指针', link: 'MC-鼠标指针'},
            { text: 'Floating OS', link: 'Floating-OS'},
            { text: 'MC-片头&尾', link: 'MC-片头-尾'},
            { text: 'Mine Cursor', link: 'Mine-Cursor'},
          ]
        },
        {
          text: 'YM-演示与设计',
          icon: 'mingcute:chart-pie-line',
          collapsed: false,
          prefix: '',
          items: [
            { text: 'Mindows11', link: 'Mindows11'},
            { text: 'Yormong OS', link: 'Yormong-OS'},
            { text: 'Yormong OS NEXT', link: 'Yormong-OS-NEXT'},
            { text: 'YM 虚拟机', link: 'YM-虚拟机'},
            { text: 'YM 安全中心', link: 'YM-安全中心'},
          ]
        },
        {
          text: 'YM-网站与应用',
          icon: 'mingcute:earth-line',
          collapsed: false,
          prefix: '',
          items: [
            { text: '柚明主页', link: '柚明主页'},
            { text: '作品文档', link: '作品文档'},
            { text: 'YM 站点监控', link: 'YM-站点监控'},
          ]
        },
      ]
    },
  ],
})

export const demoHistory = defineCollection({
  type: 'doc',
  dir: 'notes/更新日志',
  title: '更新日志',
  linkPrefix: '/notes/更新日志/',
  sidebar: [
    {
      text: '返回',
      prefix: '',
      items: [
        { text: '作品文档', link: '/notes/'},
      ]
    },
    {
      text: '更新日志',
      prefix: '',
      items: [
        {
          text: 'YM-软件工具',
          icon: 'mingcute:book-line',
          collapsed: false,
          prefix: '',
          items: [
            { text: 'MC 鼠标指针', link: 'MC-鼠标指针.html'},
            { text: 'Floating OS', link: 'Floating-OS.html'},
            { text: 'MC-片头&尾', link: 'MC-片头-尾.html'},
            { text: 'Mine Cursor', link: 'Mine-Cursor.html'},
          ]
        },
        {
          text: 'YM-演示与设计',
          icon: 'mingcute:chart-pie-line',
          collapsed: false,
          prefix: '',
          items: [
            { text: 'Mindows11', link: 'Mindows11.html'},
            { text: 'Yormong OS', link: 'Yormong-OS.html'},
            { text: 'Yormong OS NEXT', link: 'Yormong-OS-NEXT.html'},
            { text: 'YM 虚拟机', link: 'YM-虚拟机.html'},
            { text: 'YM 安全中心', link: 'YM-安全中心.html'},
          ]
        },
        {
          text: 'YM-网站与应用',
          icon: 'mingcute:earth-line',
          collapsed: false,
          prefix: '',
          items: [
            { text: '柚明主页', link: '柚明主页'},
            { icon: 'mingcute:book-2-line', text: '作品文档', link: '/notes/更多/更新日志.html'},
            { text: 'YM 站点监控', link: 'YM-站点监控.html'},
          ]
        },
      ]
    },
  ],
})

export const demoFeedback = defineCollection({
  type: 'doc',
  dir: 'notes/反馈中心',
  title: '反馈中心',
  linkPrefix: '/notes/反馈中心/',
  sidebar: [
    {
      text: '返回',
      prefix: '',
      items: [
        { text: '作品文档', link: '/notes/'},
      ]
    },
    {
      text: '反馈中心',
      prefix: '',
      items: [
        { text: '发送反馈', link: '/notes/反馈中心/'},
        { text: '灵感', link: '灵感'},
      ]
    },
    {
      text: '协议',
      items: [
        { text: '可修改作品协议', link: '/notes/协议/#可修改作品协议'},
        { text: '修改需申请作品协议', link: '/notes/协议/#修改需申请作品协议'},
        { text: '不可修改作品协议', link: '/notes/协议/#不可修改作品协议'},
        { text: '转载文章内容协议', link: '/notes/协议/#转载文章内容协议'},
      ]
    },
  ],
})

export const demoAgreement = defineCollection({
  type: 'doc',
  dir: 'notes/协议',
  title: '协议',
  linkPrefix: '/notes/协议/',
  sidebar: [
    {
      text: '返回',
      prefix: '',
      items: [
        { text: '作品文档', link: '/notes/'},
        { text: '反馈中心', link: '/notes/反馈中心/'}
      ]
    },
    {
      text: '协议',
      items: [
        { text: '导航', link: '/notes/协议/'},
        { text: ' ', link: '---' },
        { text: '完全开源作品使用权限协议 I', link: '/notes/协议/完全开源.html'},
        { text: '可修改作品使用权限协议 I', link: '/notes/协议/可修改I.html'},
        { text: '可修改作品使用权限协议 II', link: '/notes/协议/可修改II.html'},
        { text: '可修改作品使用权限协议 III', link: '/notes/协议/可修改III.html'},
        { text: '可修改作品使用权限协议 IV', link: '/notes/协议/可修改IV.html'},
        { text: ' ', link: '---' },
        { text: '修改需申请作品使用授权协议', link: '/notes/协议/修改需申请.html'},
        { text: ' ', link: '---' },
        { text: '不可修改作品使用权限协议 I', link: '/notes/协议/不可修改I.html'},
        { text: '不可修改作品使用权限协议 II', link: '/notes/协议/不可修改II.html'},
        { text: ' ', link: '---' },
        { text: '转载文章内容协议', link: '/notes/协议/转载.html'},
        { text: '不可转载文章内容协议', link: '/notes/协议/不可转载.html'},
      ],
    },
  ],
})

export const demoMore = defineCollection({
  type: 'doc',
  dir: 'notes/更多',
  title: '更多',
  linkPrefix: '/notes/更多/',
  sidebar: [
    {
      text: '去这里',
      prefix: '',
      items: [
        { text: '作品文档', link: '/notes/'},
        { text: '反馈中心', link: '/notes/反馈中心/'}
      ]
    },
    {
      text: '关于',
      prefix: '',
      items: [
        { text: '此网站', link: '/notes/作品文档.html'},
        { icon: 'mingcute:history-anticlockwise-line', text: '更新日志', link: '更新日志.html'},
        { text: '工作室', link: '工作室.html'},
        { text: '成员页面', link: '/friends/', icon: 'mingcute:contacts-3-line'},
      ]
    },
    {
      text: '',
      prefix: '',
      items: [
        { text: '社交链接页', link: '链接.html'},
        { text: '爱发电', link: '爱发电.html'}
      ]
    },
  ],
})

export const collections = defineCollections([
  demoNotes, demoHistory, demoFeedback, demoAgreement, demoMore
])