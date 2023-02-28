/*
 * @Author: JOJOcode
 * @Date: 2022-11-15 20:11:10
 * @LastEditTime: 2022-11-17 16:26:44
 * @FilePath: \demo\13_设置cors响应头实现跨域\server.js
 */
const express = require("express");
const app = express();

app.all("/cors-server", (request, response) => {
  //设置cors响应头  *代表所有的网站都能跨域发送请求
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 只有http://127.0.0.1:5500才能跨域给该服务器发送请求
  // response.setHeader("Assess-Control-Allow-Origin", "http://127.0.0.1:5500");
  response.send("Hello cors");
});

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
