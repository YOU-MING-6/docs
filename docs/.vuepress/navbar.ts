import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/', icon: 'mingcute:home-4-line' },
  {
    text: '作品文档',
    link: '/notes/',
    icon: 'mingcute:book-2-line',
    activeMatch: '^/notes/[^/更新历史/|/反馈中心/|/协议/|/更多/]{1,}|/notes/$',
  },
  {
    text: '更新历史',
    link: '/notes/更新历史/MC-鼠标指针.html',
    icon: 'mingcute:history-anticlockwise-line',
    activeMatch: '^/notes/更新历史/',
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
            text: '开源作品使用权限协议',
            link: '/notes/协议/开源.html',
            icon: 'mingcute:pencil-3-line',
          },
          {
            text: '非开源作品使用授权协议',
            link: '/notes/协议/非开源.html',
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
            icon: '/rc/ym-docs-icon.svg',
          },
          {
            text: '成员页面',
            link: '/friends/',
            icon: 'mingcute:contacts-3-line',
          }
        ],
      },
      {
        text: '特别鸣谢 · 爱发电',
        link: '/notes/更多/爱发电.html',
        icon: 'mingcute:lightning-line',
      },
      {
        text: '',
        items: [
          {
            text: '社交链接页',
            link: '/notes/更多/链接.html',
            icon: 'mingcute:link-2-line',
          }
        ],
      },
    ],
  },
])
