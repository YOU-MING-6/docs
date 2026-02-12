import { h } from 'vue'
import { Layout } from 'vuepress-theme-plume/client'
import { defineClientConfig } from 'vuepress/client'
import NotFound from './theme/layouts/NotFound.vue'
import SidebarNav from './theme/components/SidebarNav.vue'
import DocFooterNav from './theme/components/DocFooterNav.vue'
import MetaAfterNav from './theme/components/MetaAfterNav.vue'
import './theme/styles/custom.css'

export default defineClientConfig({
  layouts: {
    NotFound,
    Layout: h(Layout, null, {
      'sidebar-nav-after': () => h(SidebarNav),
      'doc-footer-before': () => h(DocFooterNav),
      'doc-meta-after': () => h(MetaAfterNav),
    })
  },
  enhance({ app }) {
  },
})