const express = require('express');

const app = express();

app.get('/expensive', (req, res) => {
  res.send('Block this api.')
})

app.get('/optimize', (req, res) => {
  res.send('This is an optimize api.')
})

app.listen(process.env.PORT || 8087)