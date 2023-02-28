/*
 * @Author: JOJOcode
 * @Date: 2022-11-15 20:11:10
 * @LastEditTime: 2022-11-17 10:42:03
 * @FilePath: \demo\10_同源策略\server.js
 */
const express = require("express");
const app = express();

app.get("/home", (request, response) => {
  // 响应一个页面    需要写绝对路径 __dirname + "/index.html"
  response.sendFile(__dirname + "/index.html");
});

app.get("/data", (request, response) => {
  response.send("用户数据");
});

app.listen(9000, () => {
  console.log("http://localhost:9000");
});
