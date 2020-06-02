const express = require('express');

const app = express();

app.get('/expensive', (req, res) => {
  res.send('This is an expensive api.')
})

app.listen(process.env.PORT || 8087)