// server.js
const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/affiliate-data', async (req, res) => {
  const apiKey = 'noY0AxxNXNzlrJLsnp';
  const apiSecret = 'frLnT94oj8KJjRZVMr3RDoCrDX8Bb8Sli5dR';
  const timestamp = Date.now();
  const queryString = `api_key=${apiKey}&timestamp=${timestamp}`;
  const crypto = require('crypto');
  const sign = crypto.createHmac('sha256', apiSecret).update(queryString).digest('hex');
  const url = `https://api.bybit.com/v5/affiliate/aff-user-list?${queryString}&sign=${sign}`;

  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => console.log('Server running on port 3000'));
