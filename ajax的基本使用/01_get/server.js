const express = require("express");

const app = express();

app.get("/server", (request, response) => {
  // 设置响应头  (响应头名,值)
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 设置响应体
  response.send("Hello Ajax");
});

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
