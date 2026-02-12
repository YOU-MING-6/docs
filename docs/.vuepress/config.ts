import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import { path } from "vuepress/utils"
import { redirectPlugin } from '@vuepress/plugin-redirect'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '作品文档',
  description: 'Youming 工作室的作品文档',

  head: [
    ['link', { rel: 'icon', href: '/rc/docs.png' }],
  ],

  alias: {
    // 灯笼装饰（docs\.vuepress\theme\components\lantern.vue）
    "@theme/Nav/VPNavBarTitle.vue": path.resolve(
      __dirname,
      "./theme/components/lantern.vue"
    ),
    // 404 页面组件
    "@theme/Nav/NotFound.vue": path.resolve(
      __dirname,
      "./theme/layouts/NotFound.vue"
    )
  },

  shouldPrefetch: false, // 是否开启预加载

  bundler: viteBundler(),

  plugins: [
    redirectPlugin({
      config: {
        '/%E5%BF%85%E7%9C%8B-%E5%BC%80%E6%BA%90.html': '/notes/更多/必看.html', // /必看-开源-非商用.html
        '/%e5%bf%85%e7%9c%8b-%e9%9d%9e%e5%bc%80%e6%ba%90.html': '/notes/更多//必看.html',  // /必看-非开源-非商用.html
        '/%E6%9B%B4%E5%A4%9A-%E5%BF%85%E7%9C%8B-%E5%BC%80%E6%BA%90.html': '/notes/更多//必看.html',  // /更多-必看-开源-非商用.html
        '/%e6%9b%b4%e5%a4%9a-%e5%bf%85%e7%9c%8b.html': '/notes/更多//必看.html',  // /更多-必看.html
        '/%E5%BF%85%E7%9C%8B.html': '/notes/更多/必看.html',  // /必看.html
        '/%E5%85%AC%E5%91%8A.html': '/notes/更多/公告.html',  // /公告.html
        '/%E9%93%BE%E6%8E%A5.html': '/notes/更多/链接.html',  // /链接.html
        '/%E7%A4%BE%E4%BA%A4%E9%93%BE%E6%8E%A5%E9%A1%B5.html': '/notes/更多/链接.html',  // /社交链接页.html
        '/notes/%e5%8d%8f%e8%ae%ae/%e5%bc%80%e6%ba%90.html': '/notes/协议/可修改IV.html',  // /notes/协议/开源.html
        '/notes/%e5%8f%8d%e9%a6%88%e4%b8%ad%e5%bf%83/%e5%8f%8d%e9%a6%88.html': '/notes/反馈中心/',  // /notes/反馈中心/反馈.html
        '/notes/%E5%8D%8F%E8%AE%AE/%E5%BC%80%E6%BA%90-%E9%9D%9E%E5%95%86%E4%B8%9A.html': '/notes/协议/可修改IV.html',  // /notes/协议/开源-非商业.html
        '/notes/%E5%8D%8F%E8%AE%AE/%E5%BC%80%E6%BA%90-%E5%95%86%E7%94%A8.html': '/notes/协议/可修改II.html',  // /notes/协议/开源-商用.html
        '/notes/%E5%8D%8F%E8%AE%AE/%E5%BC%80%E6%BA%90-%E9%9D%9E%E5%95%86%E7%94%A8.html': '/notes/协议/可修改IV.html',  // /notes/协议/开源-非商用.html
        '/notes/%E5%8D%8F%E8%AE%AE/%E9%9D%9E%E5%BC%80%E6%BA%90-%E9%9D%9E%E5%95%86%E7%94%A8.html': '/notes/协议/修改需申请.html',  // /notes/协议/非开源-非商用.html
        '/notes/%E5%8D%8F%E8%AE%AE/%E9%97%AD%E6%BA%90.html': '/notes/协议/不可修改II.html',  // /notes/协议/闭源.html
        // 重复
        '/必看-开源-非商用.html': '/notes/更多/必看.html',
        '/必看-非开源-非商用.html': '/notes/更多//必看.html',
        '/更多-必看-开源-非商用.html': '/notes/更多//必看.html',
        '/更多-必看.html': '/notes/更多//必看.html',
        '/必看.html': '/notes/更多/必看.html',
        '/公告.html': '/notes/更多/公告.html',
        '/链接.html': '/notes/更多/链接.html',
        '/社交链接页.html': '/notes/更多/链接.html',
        '/notes/协议/开源.html': '/notes/协议/可修改IV.html',
        '/notes/反馈中心/反馈.html': '/notes/反馈中心/',
        '/notes/协议/开源-非商业.html': '/notes/协议/可修改IV.html',
        '/notes/协议/开源-商用.html': '/notes/协议/可修改II.html',
        '/notes/协议/开源-非商用.html': '/notes/协议/可修改IV.html',
        '/notes/协议/非开源-非商用.html': '/notes/协议/修改需申请.html',
        '/notes/协议/闭源.html': '/notes/协议/不可修改II.html',
      },
    }),
  ],

  theme: plumeTheme({
    hostname: 'https://docs.youming.v6.army', // 部署域名
    
    docsRepo: 'https://github.com/YOU-MING-6/docs',
    docsDir: 'docs',

    // 贡献者
    contributors: {
      mode: 'inline',
      info: [
        {
          username: 'YOU MING 柚明', // 显示的名字
          alias: ['you-ming-6', 'YOU-MING-6'], // 别名
        },
        {
          username: 'Afly-dream', // 显示的名字
          alias: ['Aflydream'], // 别名
        }
      ]
    },

    // 公告栏
    bulletin: {
      layout: 'top-right', // 公告位置
      border: true, // 是否显示渐变边框
      title: '', // 公告标题
      contentFile: path.join(__dirname, 'bulletin.md'), // 公告内容文件路径
    },

    markdown: {
      fileTree: true, // ::: file-tree  文件树容器
      plot: true, // !!plot!! 隐秘文本
      icons: true, // ::collect:name::   内联 iconify 图标
      artPlayer: true, // @[art-player](url)  嵌入 art-player 视频
      audioReader: true, // @[audio-reader](url)  嵌入 audio-reader 音频
      // pdf: true, // @[pdf](url)  嵌入 PDF 文件
      bilibili: true, // @[bilibili](bvid)  嵌入 bilibili 视频
      // youtube: true, // @[youtube](id)  嵌入 youtube 视频
      // codepen: true, // @[codepen](user/slash)  嵌入 codepen
      // replit: true, // @[replit](user/repl-name)  嵌入 Replit
      // codeSandbox: true, // @[codesandbox](id)  嵌入 CodeSandbox
      // jsfiddle: true, // @[jsfiddle](id)  嵌入 jsfiddle
      // caniuse: true, // @[caniuse](feature)  嵌入 caniuse
      // imageSize: true, // 在构建阶段为 图片添加 width/height 属性
      abbr: true, // *[缩写词]: 缩写词
      annotation: true, // [+label]: 内容注释
      codeTree: true, // ::: code-tree  代码树
      field: true, // ::: field  字段容器
      timeline: true, // ::: timeline  时间线
      collapse: true, // ::: collapse  折叠面板
      chat: true, // ::: chat  对话记录
      image: {
        figure: true,  // 启用 figure
        lazyload: true,  // 启用图片懒加载
        mark: true,  // 启用图片标记
        size: true,  // 启用图片大小
      },
      table: {
        align: 'left', // 'left' | 'center' | 'right'
        maxContent: false, // 表格宽度是否为最大内容宽度；行内元素不再自动换行，超出容器宽度时表格显示滚动条
        fullWidth: false, // 表格宽度默认占据整行
        copy: true, // true | 'all' | 'html' | 'md'
      }
    },

    plugins: {
      git: true, // git 功能

      photoSwipe: {
        // 图片选择器
        selector: '.vp-doc :not(a) > img:not([no-view],.no-view,.ignore)',
        download: true, // 是否显示下载按钮
        fullscreen: true, // 是否显示全屏按钮
        scrollToClose: true, // 是否在滚动时关闭当前图片
      },
      // Shiki 代码高亮 (内置) @vuepress-plume/plugin-shikiji
      // @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
      // 
      // shiki: {
      //   languages: ['shell', 'bash', 'typescript', 'javascript'],
      // },

      // shiki 代码高亮 @vuepress/plugin-shiki@next
      // @see https://theme-plume.vuejs.press/guide/code/intro/
      // https://ecosystem.vuejs.press/zh/plugins/markdown/shiki.html
      // 

      // 评论 comments
      // @see https://theme-plume.vuejs.press/guide/features/comments/

      comment: {
        // provider: "Waline",
        // serverURL: "", // Waline评论后台
        // requiredMeta: ['nick'],
        // emoji: false,
        // reaction: [],
        // wordLimit: 2000,
        // pageSize: 20,
        // pageview: false,
        // comment: true,
      },

      // 水印
      // watermark: {
      //   // enabled: false,  // boolean 类型控制是否全局启用
      //   enabled: page => true, // function 类型 过滤哪些页面启用水印
      //   delay: 500, // 添加水印的延时。以毫秒为单位。
      //   // 是否全屏水印，默认为 `true`，
      //   // 设置为 `false` 时，水印仅在 内容区域中显示。
      //   fullPage: true,
      //   /** @see https://zhensherlock.github.io/watermark-js-plus/zh/config/ */
      //   watermarkOptions: {
      //     content: 'Youming 工作室',
      //   },
      // },
    },
  }),
})