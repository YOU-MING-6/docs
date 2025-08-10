import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNotes = defineNoteConfig({
  dir: '',
  link: '/',
  sidebar: [
    {
      text: '作品文档',
      prefix: '',
      items: [
        { text: '导航', link: '/notes/'},
        {
          text: 'YM 作品项目',
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
          text: 'YM PPT项目',
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
          text: 'YM 网站项目',
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

const demoHistory = defineNoteConfig({
  dir: '/notes/更新历史',
  link: '/notes/更新历史',
  sidebar: [
    {
      text: '返回',
      prefix: '',
      items: [
        { text: '作品文档', link: '/notes/'},
      ]
    },
    {
      text: '更新历史',
      prefix: '',
      items: [
        {
          text: 'YM 作品项目',
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
          text: 'YM PPT项目',
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
          text: 'YM 网站项目',
          icon: 'mingcute:earth-line',
          collapsed: false,
          prefix: '',
          items: [
            { text: '柚明主页', link: '柚明主页'},
            { icon: 'mingcute:book-2-line', text: '作品文档', link: '/notes/更多/更新日志.html'},
            { text: 'YM 站点监控', link: 'YM-站点监控'},
          ]
        },
      ]
    },
  ],
})

const demofeedback = defineNoteConfig({
  dir: '/notes/反馈中心',
  link: '/notes/反馈中心',
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
        { text: '导航', link: '/notes/反馈中心/'},
        { text: 'bilibili 私信', link: '/notes/反馈中心/bilibili.html'},
        { text: 'QQ 反馈', link: '/notes/反馈中心/qq.html'},
        { text: '邮件反馈', link: '/notes/反馈中心/mail.html'},
        { text: '灵感', link: '灵感'},
      ]
    },
    {
      text: '协议',
      items: [
        { text: '开源作品使用权限协议', link: '/notes/协议/开源.html'},
        { text: '非开源作品使用授权协议', link: '/notes/协议/非开源.html'},
        { text: '闭源作品使用权限协议', link: '/notes/协议/闭源.html'},
        { text: '转载文章内容协议', link: '/notes/协议/转载.html'},
      ]
    },
  ],
})

const demoagreement = defineNoteConfig({
  dir: '/notes/协议',
  link: '/notes/协议',
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
        { text: '开源作品使用权限协议', link: '开源.html'},
        { text: '非开源作品使用授权协议', link: '非开源.html'},
        { text: '闭源作品使用权限协议', link: '闭源.html'},
        { text: '转载文章内容协议', link: '/notes/协议/转载.html'},
      ],
    },
  ],
})

const demoMore = defineNoteConfig({
  dir: '/notes/更多',
  link: '/notes/更多',
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
        { icon: 'mingcute:history-anticlockwise-line', text: '更新日志', link: '更新日志'},
        { text: '工作室', link: '工作室'},
        { text: '成员页面', link: '/friends/', icon: 'mingcute:contacts-3-line'},
      ]
    },
    { text: '特别鸣谢 · 爱发电', link: '爱发电'},
    {
      text: '',
      prefix: '',
      items: [
        { text: '社交链接页', link: '/notes/更多/链接.html'}
      ]
    },
  ],
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [demoNotes,demoHistory,demofeedback,demoagreement,demoMore],
})
