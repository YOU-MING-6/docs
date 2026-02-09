// 导航栏配置
import { defineNavbarConfig } from 'vuepress-theme-plume'
import { defineCollections } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/', icon: 'mingcute:home-4-line' },
  {
    text: '作品文档',
    link: '/notes/',
    icon: 'mingcute:book-2-line',
    activeMatch: '^/notes/[^/更新日志/|/反馈中心/|/协议/|/更多/]{1,}|/notes/$',
  },
  {
    text: '更新日志',
    link: '/notes/更新日志/MC-鼠标指针.html',
    icon: 'mingcute:history-anticlockwise-line',
    activeMatch: '^/notes/更新日志/',
  },
  {
    text: '反馈中心',
    link: '/notes/反馈中心/',
    icon: 'mingcute:mail-line',
    activeMatch: '^/notes/反馈中心/',
  },
  {
    text: '更多',
    icon: 'mingcute:more-3-line',
    items: [
      {
        text: '公告与帮助',
        items: [
          {
            text: '公告',
            link: '/notes/更多/公告.html',
            icon: 'mingcute:horn-2-line',
          },
          {
            text: '指南',
            link: '/指南.html',
            icon: 'mingcute:compass-3-line',
          },
        ],
      },
      {
        text: '协议',
        items: [
          {
            text: '开源作品使用权限协议-商用',
            link: '/notes/协议/开源-商用.html',
            icon: 'mingcute:pencil-3-line',
          },
          {
            text: '开源作品使用权限协议-非商用',
            link: '/notes/协议/开源-非商用.html',
            icon: 'mingcute:pencil-3-line',
          },
          {
            text: '非开源作品使用授权协议',
            link: '/notes/协议/非开源-非商用.html',
            icon: 'mingcute:key-2-line',
          },
          {
            text: '闭源作品使用权限协议',
            link: '/notes/协议/闭源.html',
            icon: 'mingcute:forbid-circle-line',
          },
          {
            text: '转载文章内容协议',
            link: '/notes/协议/转载.html',
            icon: 'mingcute:share-3-line',
          },
        ],
      },
      {
        text: '关于',
        items: [
          {
            text: '此网站',
            link: '/notes/作品文档.html',
            icon: 'mingcute:book-2-line',
          },
          {
            text: '更新日志',
            link: '/notes/更多/更新日志.html',
            icon: 'mingcute:history-anticlockwise-line',
          },
          {
            text: '工作室',
            link: '/notes/更多/工作室.html',
            icon: '/rc/ym-icon.svg',
          },
          {
            text: '成员页面',
            link: '/friends/',
            icon: 'mingcute:contacts-3-line',
          }
        ],
      },
      {
        text: '',
        items: [
          {
            text: '社交链接页',
            link: '/notes/更多/链接.html',
            icon: 'mingcute:link-2-line',
          },
          {
            text: '爱发电',
            link: '/notes/更多/爱发电.html',
            icon: 'mingcute:lightning-line',
          },
        ],
      },
    ],
  },
])

export const notes = defineCollections([
  {
    type: 'doc',
    dir: 'notes',
    title: '作品文档',
    linkPrefix: '/notes/',
    sidebar: [
      {
        text: '作品文档',
        prefix: '',
        items: [
          { text: '导航', link: '/'},
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
  },
  
  {
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
  },
  
  {
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
          { text: '开源作品使用权限协议-非商用', link: '/notes/协议/开源-非商用.html'},
          { text: '非开源作品使用授权协议', link: '/notes/协议/非开源-非商用.html'},
          { text: '闭源作品使用权限协议', link: '/notes/协议/闭源.html'},
          { text: '转载文章内容协议', link: '/notes/协议/转载.html'},
        ]
      },
    ],
  },
  
  {
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
          { text: '开源作品使用权限协议-商用', link: '开源-商用.html'},
          { text: '开源作品使用权限协议-非商用', link: '开源-非商用.html'},
          { text: '非开源作品使用授权协议', link: '非开源-非商用.html'},
          { text: '闭源作品使用权限协议', link: '闭源.html'},
          { text: '转载文章内容协议', link: '转载.html'},
        ],
      },
    ],
  },
  
  {
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
  },
])