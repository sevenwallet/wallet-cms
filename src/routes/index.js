const express = require('express');
const app = express();

const { getWalletUser } = require('../api/wallet/user-wallet');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/wallet/:userSlug', async (req, res) => {
  const data = await getWalletUser(req.params.userSlug);
  res.send(data);
});

module.exports = app;
