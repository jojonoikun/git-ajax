/*
 * @Author: JOJOcode
 * @Date: 2022-11-15 20:11:10
 * @LastEditTime: 2022-11-17 11:15:30
 * @FilePath: \demo\11_Ajax_jsonp\server.js
 */
const express = require("express");
const app = express();

//jsonp服务
app.all("/jsonp-server", (request, response) => {
  // response.send("Hello jsonp"); //script标签返回的应该是js代码，否则浏览器引擎无法解析
  // response.send('console.log("Hello jsonp")'); //单引号 括 双引号
  const data = {
    name: "jsonp123",
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
