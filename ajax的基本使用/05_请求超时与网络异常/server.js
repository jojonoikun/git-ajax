/*
 * @Author: JOJOcode
 * @Date: 2022-11-15 20:11:10
 * @LastEditTime: 2022-11-15 22:05:50
 * @FilePath: \Ajax\01_express\demo\05_请求超时与网络异常\server.js
 */
const express = require("express");

const app = express();

app.all("/", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  response.send("Hello Ajax");
});

app.all("/ie", (request, response) => {
  //允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");

  response.send("Hello IE");
});

// 延时响应  超过2s就返回 超时提示
app.get("/delay", (request, response) => {
  //允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  setTimeout(() => {
    response.send("延时响应");
  }, 2000);
});

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
