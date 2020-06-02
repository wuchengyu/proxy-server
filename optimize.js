const express = require('express');

const app = express();

app.get('/optimize', (req, res) => {
  res.send('This is an optimize api.')
})

app.listen(process.env.PORT || 8088)