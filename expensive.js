const express = require('express');

const app = express();

app.get('/expensive', (req, res) => {
  res.send('This is an expensive api.')
})

app.get('/other', (req, res) => {
  res.send('This is other api.')
})

app.listen(process.env.PORT || 8088)