module.exports = (req, res) => {
  // 只允许 POST
  if (req.method !== 'POST') {
    return res.status(405).json({ ec: 405, em: 'Method Not Allowed' });
  }

  // 如需签名校验可在这里加，但爱发电只要求返回 200
  res.status(200).json({ ec: 200, em: '' });
};