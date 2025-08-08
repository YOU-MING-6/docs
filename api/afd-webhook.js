import crypto from 'crypto'

const TOKEN = process.env.AFD_TOKEN

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const body = JSON.stringify(req.body)
  const sig = crypto.createHash('md5').update(TOKEN + body).digest('hex')
  if (sig !== req.headers['x-afd-signature'])
    return res.status(401).send('bad sign')

  const { data } = req.body
  if (data.type !== 'order') return res.send('skip')

  // 触发 GitHub Action
  await fetch(process.env.VERCEL_BUILD_HOOK, { method: 'POST' })
  res.json({ ok: true })
}