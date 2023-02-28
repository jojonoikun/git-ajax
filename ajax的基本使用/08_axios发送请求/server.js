/*
 * @Author: JOJOcode
 * @Date: 2022-11-15 20:11:10
 * @LastEditTime: 2022-11-16 18:45:36
 * @FilePath: \demo\08_axios发送请求\server.js
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

app.all("/axios-server", (request, response) => {
  //允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  const data = { name: "niuyeye" };
  response.send(JSON.stringify(data));
});

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
