<script lang="ts" setup>
import VPImage from "vuepress-theme-plume/components/VPImage.vue";
import VPLink from "vuepress-theme-plume/components/VPLink.vue";
import { useRouteLocale } from "vuepress/client";
import { useData, useSidebar } from "vuepress-theme-plume/composables";

const { theme, site, isDark } = useData();
const { hasSidebar } = useSidebar();
const routeLocale = useRouteLocale();
</script>

<template>
  <div class="vp-navbar-title" :class="{ 'has-sidebar': hasSidebar }">
    <VPLink
      class="title"
      :style="{ color: isDark ? 'rgba(255, 255, 245, 0.86)' : '#dc2626' }"
      :href="theme.home ?? routeLocale"
    >
      <slot name="nav-bar-title-before" />

      <VPImage
        v-if="theme.logo"
        class="logo"
        :image="{ light: theme.logo, dark: theme.logoDark || theme.logo }"
      />
      <SparklesText :sparkles-count="5" :text="site.title"></SparklesText>

      <slot name="nav-bar-title-after" />
    </VPLink>

  <!-- 灯笼1 -->
  <div class="deng-box">
    <div class="deng">
      <div class="xian"></div>
      <div class="deng-a">
        <div class="deng-b"><div class="deng-t">年</div></div>
      </div>
      <div class="shui shui-a">
        <div class="shui-c"></div>
        <div class="shui-b"></div>
      </div>
    </div>
  </div>

<AudioReader src="/rc/gxfc.mp3">
  <!-- 灯笼2 -->
  <div class="deng-box1">
    <div class="deng">
      <div class="xian"></div>
      <div class="deng-a">
        <div class="deng-b"><div class="deng-t">新</div></div>
      </div>
      <div class="shui shui-a">
        <div class="shui-c"></div>
        <div class="shui-b"></div>
      </div>
    </div>
  </div>
</AudioReader>

<AudioReader src="/rc/gxfc.mp3">
  <!-- 灯笼3 -->
  <div class="deng-box2">
    <div class="deng">
      <div class="xian"></div>
      <div class="deng-a">
        <div class="deng-b"><div class="deng-t">快</div></div>
      </div>
      <div class="shui shui-a">
        <div class="shui-c"></div>
        <div class="shui-b"></div>
      </div>
    </div>
  </div>
</AudioReader>

  <!-- 灯笼4 -->
  <div class="deng-box3">
    <div class="deng">
      <div class="xian"></div>
      <div class="deng-a">
        <div class="deng-b"><div class="deng-t">乐</div></div>
      </div>
      <div class="shui shui-a">
        <div class="shui-c"></div>
        <div class="shui-b"></div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.title {
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--vp-nav-height);
  font-size: 20px;
  font-weight: 700;
  font-family: "ZWZT";
  border-bottom: 1px solid transparent;
  transition: opacity var(--vp-t-color), color var(--vp-t-color),
    border-bottom var(--vp-t-color);
  overflow: hidden;
}

@media (min-width: 960px) {
  .title {
    flex-shrink: 0;
  }

  .vp-navbar-title.has-sidebar .title {
    border-bottom-color: var(--vp-c-divider);
  }
}

:deep(.logo) {
  height: min(var(--vp-nav-logo-height, 24px), 48px);
  margin-right: 8px;
}

.deng-box {
  position: fixed;
  top: -40px;
  left: 60px;
  z-index: 1;
}

.deng-box1 {
  position: fixed;
  top: -30px;
  left: 10px;
  z-index: 1;
}

.deng-box2 {
  position: fixed;
  top: -40px;
  right: 20px;
  z-index: 1;
}

.deng-box3 {
  position: fixed;
  top: -30px;
  right: -30px;
  z-index: 0;
}

/* 手机 */
@media (max-width: 1850px) {
  .deng-box, .deng-box1, .deng-box2, .deng-box3 {
    display: none;
  }
}

.deng-box3 .deng,
.deng-box1 .deng {
  position: relative;
  width: 120px;
  height: 90px;
  margin: 50px;
  background: #d8000f;
  background: rgba(216, 0, 15, 0.8);
  border-radius: 50% 50%;
  transform-origin: 50% -100px;
  animation: swing 5s infinite ease-in-out;
  box-shadow: -5px 5px 30px 4px rgba(252, 144, 61, 1);
}

.deng {
  position: relative;
  width: 120px;
  height: 90px;
  margin: 50px;
  background: #d8000f;
  background: rgba(216, 0, 15, 0.8);
  border-radius: 50% 50%;
  transform-origin: 50% -100px;
  animation: swing 3s infinite ease-in-out;
  box-shadow: -5px 5px 50px 4px rgba(250, 108, 0, 1);
}

.deng-a {
  width: 100px;
  height: 90px;
  background: #d8000f;
  background: rgba(216, 0, 15, 0.1);
  margin: 12px 8px 8px 8px;
  border-radius: 50% 50%;
  border: 2px solid #dc8f03;
}

.deng-b {
  width: 45px;
  height: 90px;
  background: #d8000f;
  background: rgba(216, 0, 15, 0.1);
  margin: -4px 8px 8px 26px;
  border-radius: 50% 50%;
  border: 2px solid #dc8f03;
}

.xian {
  position: absolute;
  top: -20px;
  left: 60px;
  width: 2px;
  height: 20px;
  background: #dc8f03;
}

.shui-a {
  position: relative;
  width: 5px;
  height: 20px;
  margin: -5px 0 0 59px;
  animation: swing 4s infinite ease-in-out;
  transform-origin: 50% -45px;
  background: #ffa500;
  border-radius: 0 0 5px 5px;
}

.shui-b {
  position: absolute;
  top: 14px;
  left: -2px;
  width: 10px;
  height: 10px;
  background: #dc8f03;
  border-radius: 50%;
}

.shui-c {
  position: absolute;
  top: 18px;
  left: -2px;
  width: 10px;
  height: 35px;
  background: #ffa500;
  border-radius: 0 0 0 5px;
}

.deng:before {
  position: absolute;
  top: -7px;
  left: 29px;
  height: 12px;
  width: 60px;
  content: " ";
  display: block;
  z-index: 999;
  border-radius: 5px 5px 0 0;
  border: solid 1px #dc8f03;
  background: #ffa500;
  background: linear-gradient(
    to right,
    #dc8f03,
    #ffa500,
    #dc8f03,
    #ffa500,
    #dc8f03
  );
}

.deng:after {
  position: absolute;
  bottom: -7px;
  left: 10px;
  height: 12px;
  width: 60px;
  content: " ";
  display: block;
  margin-left: 20px;
  border-radius: 0 0 5px 5px;
  border: solid 1px #dc8f03;
  background: #ffa500;
  background: linear-gradient(
    to right,
    #dc8f03,
    #ffa500,
    #dc8f03,
    #ffa500,
    #dc8f03
  );
}

.deng-t {
  font-family: 华文行楷, Arial, Lucida Grande, Tahoma, sans-serif;
  font-size: 3.2rem;
  color: #dc8f03;
  font-weight: bold;
  line-height: 85px;
  text-align: center;
}

.night .deng-t,
.night .deng-box,
.night .deng-box1 {
  background: transparent !important;
}

@keyframes swing {
  0% {
    transform: rotate(-10deg);
  }

  50% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(-10deg);
  }
}
</style>