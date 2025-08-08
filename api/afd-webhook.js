// api/afd-webhook.js
module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { AFD_USER_ID, AFD_TOKEN } = process.env;
    if (!AFD_USER_ID || !AFD_TOKEN) {
      return res.status(500).send('Missing environment variables');
    }

    // 这里添加处理 Webhook 请求的逻辑
    console.log('Received webhook:', req.body);

    // 假设请求处理成功
    res.status(200).send('Webhook received');
  } else {
    // 如果不是 POST 请求，返回 405 Method Not Allowed
    res.status(405).send('Method Not Allowed');
  }
};