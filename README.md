# proxy-server

## 目的：API隔離，轉移

## 專案說明：

  1. 利用 Express 架設一個 API server(1)，包含了一個高花費的API及其它的API

  2. 利用 Express 架設一個 API server(2)，包含了一個優化後的API及阻擋的API

  3. 加入 Http-proxy，將 API server(2) 的流量轉移到 API server(1)

  4. Docker 化部署

  5. 獨立代理伺服器

