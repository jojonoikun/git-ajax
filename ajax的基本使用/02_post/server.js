/*
 * @Author: JOJOcode
 * @Date: 2022-11-15 20:11:10
 * @LastEditTime: 2022-11-15 20:43:21
 * @FilePath: \Ajax\01_express\demo\02_post\server.js
 */
const express = require("express");

const app = express();

// all可以接受任意类型的请求
app.all("/server", (request, response) => {
  // 设置响应头  (响应头名,值)   Access-Control-Allow-Origin是解决跨域
  response.setHeader("Access-Control-Allow-Origin", "*");

  // 自定义响应头  *任意类型的头信息都可以接收
  response.setHeader("Access-Control-Allow-Headers", "*");

  // 设置响应体
  response.send("Hello Ajax post");
});

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
