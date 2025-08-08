// @ts-check
require('dotenv').config({ path: './.env.local' })
const fs = require('fs')
const path = require('path')
const axios = require('axios')
const CryptoJS = require('crypto-js')

const { AFD_USER_ID: user_id, AFD_TOKEN: token } = process.env
if (!user_id || !token) {
  console.error('请在 .env.local 中配置 AFD_USER_ID 与 AFD_TOKEN')
  process.exit(1)
}

const api = 'https://afdian.com/api/open/query-sponsor'
const ts = Math.floor(Date.now() / 1000)
const params = JSON.stringify({ page: 1, per_page: 100 }) // 大于 100 请分页
const sign = CryptoJS.MD5(
  `${token}params${params}ts${ts}user_id${user_id}`
).toString()

async function run() {
  const { data: res } = await axios.post(api, {
    user_id,
    params,
    ts,
    sign
  })
  if (res.ec !== 200) {
    throw new Error(res.em || '拉取失败')
  }

  const outDir = path.resolve(__dirname, '../docs/.vuepress/data')
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(
    path.join(outDir, 'afd-sponsors.json'),
    JSON.stringify(res.data.list, null, 2)
  )
  console.log(`✅ 成功拉取 ${res.data.list.length} 位赞助者`)
}

run().catch(console.error)