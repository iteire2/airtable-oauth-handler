const express = require('express');
const app = express();

app.get('/oauth/callback', (req, res) => {
  const code = req.query.code;
  if (!code) {
    return res.status(400).send('Error: Missing OAuth code.');
  }
  res.send(`🎉 Authorization successful. Your Airtable code is:<br><code>${code}</code>`);
});

// 👇 This is the missing part causing 404
app.get('/', (req, res) => {
  res.send('🔐 Airtable OAuth Handler is live!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server listening on port ${port}`);
});