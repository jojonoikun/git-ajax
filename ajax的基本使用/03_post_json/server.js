/*
 * @Author: JOJOcode
 * @Date: 2022-11-15 20:11:10
 * @LastEditTime: 2022-11-15 21:46:22
 * @FilePath: \Ajax\01_express\demo\03_post_json\server.js
 */
const express = require("express");

const app = express();

app.all("/", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  response.send("Hello Ajax");
});

app.all("/json-server", (request, response) => {
  // 设置响应头  (响应头名,值)   Access-Control-Allow-Origin是解决跨域
  response.setHeader("Access-Control-Allow-Origin", "*");

  // 自定义响应头  *任意类型的头信息都可以接收
  response.setHeader("Access-Control-Allow-Headers", "*");

  const data = {
    name: "bobo123",
  };
  // 对 对象进行字符串转换
  let str = JSON.stringify(data);

  // 设置响应体send()里是字符串
  response.send(str);
});

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
