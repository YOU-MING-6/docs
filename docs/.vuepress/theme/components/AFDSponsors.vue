<!-- docs/.vuepress/theme/components/AFDSponsors.vue -->

<template>
  <section class="afd-sponsors">
    <h2>特别鸣谢 · 爱发电</h2>

    <!-- 空状态 -->
    <div v-if="!sponsors.length" class="empty">
      <p>🤍 目前还没有赞助者，成为第一位支持者吧！</p>
      <a href="https://afdian.com/a/you-ming" target="_blank">
        <img width="150" src="https://pic1.afdiancdn.com/static/img/welcome/button-sponsorme.png" alt="">
      </a>
    </div>

    <!-- 年份分组，整体倒序 -->
    <template v-else>
      <div
        v-for="[year, list] in sortedYears"
        :key="year"
        class="year-section"
      >
        <h3>{{ year }} 年</h3>
        <ul class="sponsor-grid">
          <li
            v-for="s in list"
            :key="s.user.user_id"
            class="sponsor-card"
          >
            <img
              :src="s.user.avatar"
              :alt="s.user.name"
              loading="lazy"
              class="avatar"
            />
            <div class="info">
              <span class="name">{{ s.user.name }}</span>
              <span class="amount">¥{{ s.all_sum_amount }}</span>
              <span class="date">{{ fmtDate(s.last_pay_time) }}</span>
            </div>
          </li>
        </ul>
      </div>
    </template>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import sponsorsData from '../../data/afd-sponsors.json'

const sponsors = ref(sponsorsData)

/* 1. 先按年份分组并倒序年份 */
const sortedYears = computed(() => {
  const map = {}
  sponsors.value.forEach(s => {
    const year = new Date(s.last_pay_time * 1000).getFullYear()
    if (!map[year]) map[year] = []
    map[year].push(s)
  })
  /* 2. 同一年份内再按时间倒序 */
  Object.keys(map).forEach(year => {
    map[year].sort((a, b) => b.last_pay_time - a.last_pay_time)
  })
  /* 3. 年份本身倒序 */
  return Object.entries(map).sort(([a], [b]) => b - a)
})

/* 辅助：显示年月日 */
const fmtDate = ts => new Date(ts * 1000).toLocaleDateString()
</script>

<style scoped>
.afd-sponsors { margin: 40px 0; text-align: center; }

.year-section { margin-bottom: 40px; }
.year-section h3 {
  margin: 0 0 16px;
  font-size: 1.5em;
}

.sponsor-grid {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}

.sponsor-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  transition: transform .2s;
}
.sponsor-card:hover { transform: translateY(-2px); }

.avatar { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; }

.info { display: flex; flex-direction: column; align-items: flex-start; flex: 1; }

.name { font-weight: 600; color: var(--vp-c-text-1); }

.amount { font-size: .9em; color: var(--vp-c-brand); }

.date { font-size: .75em; color: var(--vp-c-text-2); }

.empty img { margin-bottom: 12px; }
.empty p { margin: 8px 0 16px; color: var(--vp-c-text-2); }

.sponsor-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  border-radius: 999px;
  background: var(--vp-c-brand);
  color: #fff;
  font-size: .9em;
  text-decoration: none;
  transition: opacity .2s;
}
.sponsor-btn:hover { opacity: .85; }

@media (max-width: 480px) {
  .sponsor-grid { grid-template-columns: 1fr; }
}
</style>