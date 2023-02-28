/*
 * @Author: JOJOcode
 * @Date: 2022-11-15 20:11:10
 * @LastEditTime: 2022-11-17 15:57:12
 * @FilePath: \demo\12_Ajax原生jsonp实践\server.js
 */
const express = require("express");
const app = express();

//检测用户名是否存在  //jsonp服务
app.all("/check-username", (request, response) => {
  const data = {
    name: "jsonp123",
    msg: "用户名已经存在",
  };
  // 把数据转成字符串
  let str = JSON.stringify(data);
  // 返回数据时用end() 不会加特殊响应头  send()其实也可以

  //返回的结果是函数调用（能被浏览器引擎解析）  返回的(${str})参数就是给前端返回的数据
  response.end(`handle(${str})`);
});

app.listen(8001, () => {
  console.log("http://localhost:8001");
});
