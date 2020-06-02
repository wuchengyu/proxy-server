const express = require('express');
const httpproxy = require('http-proxy');

const EXPENSIVE_SERVER = process.env.EXPENSIVE_SERVER || 'http://localhost:8088';

const app = express();
const proxyor = httpproxy.createProxyServer({});

app.get('/expensive', (req, res) => {
  res.send('Block this api.')
})

app.get('/optimize', (req, res) => {
  res.send('This is an optimize api.')
})

app.all('/*', (req, res) => {
  proxyor.web(req, res, {
    target: EXPENSIVE_SERVER,
    toProxy: true,
    headers: req.headers,
    proxyTimeout: 5000
  });
});

app.listen(process.env.PORT || 8087)