<script setup lang="ts">
import { NotFound, useData } from 'vuepress-theme-plume/client'
import { useRouteLocale, withBase } from 'vuepress/client'

const root = useRouteLocale()
const { theme } = useData()

// 返回上一级的方法
const goToParent = () => {
  const currentUrl = window.location.pathname
  let parentPath = currentUrl
  
  // 移除末尾的斜杠
  if (parentPath.endsWith('/')) {
    parentPath = parentPath.slice(0, -1)
  }
  
  // 移除最后一个路径段
  const lastSlashIndex = parentPath.lastIndexOf('/')
  if (lastSlashIndex > 0) {
    parentPath = parentPath.slice(0, lastSlashIndex)
  } else if (lastSlashIndex === 0) {
    // 若为根目录下的第一级路径，则返回根目录
    parentPath = '/'
  }
  
  // 跳转到上一级路径
  window.location.href = parentPath + '/'
}

// 返回上一页的方法
const goBack = () => {
  window.history.back()
}
</script>

<template>
  <NotFound>
    <template #not-found>
      <div vp-not-found class="theme-plume vp-layout">
        <slot name="layout-top" />
        <VPSkipLink />

        <VPNav>
          <template #nav-bar-title-before>
            <slot name="nav-bar-title-before" />
          </template>
          <template #nav-bar-title-after>
            <slot name="nav-bar-title-after" />
          </template>
          <template #nav-bar-content-before>
            <slot name="nav-bar-content-before" />
          </template>
          <template #nav-bar-content-after>
            <slot name="nav-bar-content-after" />
          </template>
          <template #nav-bar-menu-before>
            <slot name="nav-bar-menu-before" />
          </template>
          <template #nav-bar-menu-after>
            <slot name="nav-bar-menu-after" />
          </template>
          <template #nav-screen-content-before>
            <slot name="nav-screen-content-before" />
          </template>
          <template #nav-screen-content-after>
            <slot name="nav-screen-content-after" />
          </template>
          <template #nav-screen-menu-before>
            <slot name="nav-screen-menu-before" />
          </template>
          <template #nav-screen-menu-after>
            <slot name="nav-screen-menu-after" />
          </template>
        </VPNav>

        <div id="VPContent" class="vp-content">
          <slot name="not-found">
            <div class="vp-not-found">
              <p class="code">
                {{ theme.notFound?.code ?? '404' }}
              </p>
              <h1 class="title">
                {{ theme.notFound?.title ?? 'PAGE NOT FOUND' }}
              </h1>
              <div class="divider" />
              <blockquote class="quote">
                {{ 
                  theme.notFound?.quote
                    ?? "But if you don't change your direction, and if you keep looking, you may end up where you are heading."
                }}
              </blockquote>

              <div class="action">
              <button class="link" @click="goBack" :aria-label="'go back'">
                返回
              </button>
              <button class="link" @click="goToParent" :aria-label="'go to parent directory'">
                上一级
              </button>
              <a class="link" :href="withBase(root)" :aria-label="theme.notFound?.linkLabel ?? 'go to home'">
                {{ theme.notFound?.linkText ?? 'Take me home' }}
              </a>
            </div>
          </div>
          </slot>
        </div>
        <VPFooter>
          <template #footer-content>
            <slot name="footer-content" />
          </template>
        </VPFooter>
        <slot name="layout-bottom" />
      </div>
      
      <VPBulletin>
        <template #bulletin-content>
          <slot name="bulletin-content" />
        </template>
      </VPBulletin>
    </template>
  </NotFound>
</template>

<style scoped>
.vp-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.vp-content {
  flex-grow: 1;
  flex-shrink: 0;
  width: 100%;
  margin: var(--vp-layout-top-height, 0) auto 0;
}

@media (min-width: 960px) {
  .vp-content {
    padding-top: var(--vp-nav-height);
  }
}

.vp-not-found {
  padding: 64px 24px 96px;
  text-align: center;
}

@media (min-width: 768px) {
  .vp-not-found {
    padding: 96px 32px 168px;
  }
}

.code {
  font-size: 64px;
  font-weight: 600;
  line-height: 64px;
}

.title {
  padding-top: 12px;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 2px;
}

.divider {
  width: 64px;
  height: 1px;
  margin: 24px auto 18px;
  background-color: var(--vp-c-divider);
  transition: background-color  var(--vp-t-color);
}

.quote {
  max-width: 256px;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  transition: color var(--vp-t-color);
}

.action {
  padding-top: 20px;
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.link {
  display: inline-block;
  padding: 3px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 16px;
  transition: color var(--vp-t-color), border-color var(--vp-t-color);
  background: none;
  cursor: pointer;
}

.link:hover {
  color: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
}
</style>