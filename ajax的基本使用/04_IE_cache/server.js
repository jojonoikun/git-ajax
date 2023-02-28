/*
 * @Author: JOJOcode
 * @Date: 2022-11-15 20:11:10
 * @LastEditTime: 2022-11-15 21:54:24
 * @FilePath: \Ajax\01_express\demo\04_IE_cache\server.js
 */
const express = require("express");

const app = express();

app.all("/", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  response.send("Hello Ajax");
});

app.all("/ie", (request, response) => {
  // 设置响应头  (响应头名,值)   Access-Control-Allow-Origin是解决跨域
  response.setHeader("Access-Control-Allow-Origin", "*");

  response.send("Hello IE");
});

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
