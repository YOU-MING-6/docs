// api/afd-webhook.js  （GitHub Actions 接收器）
module.exports = (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ ec: 405 });

  // 触发 repository_dispatch
  fetch(
    `https://api.github.com/repos/${process.env.GITHUB_REPOSITORY}/dispatches`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
      },
      body: JSON.stringify({ event_type: 'afd_webhook' }),
    }
  );

  res.json({ ec: 200, em: '' });
};