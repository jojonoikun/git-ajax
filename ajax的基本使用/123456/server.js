/*
 * @Author: JOJOcode
 * @Date: 2022-11-15 20:11:10
 * @LastEditTime: 2022-11-19 22:43:18
 * @FilePath: \demo\123456\server.js
 */
const express = require("express");
const datas = require("./CategoryList.json");
const app = express();

app.all("/", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  response.send("Hello Ajax");
});

app.all("/product/getBaseCategoryList", (request, response) => {
  //允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.status("200")
  response.send(JSON.stringify(datas));
});

app.listen(8848, () => {
  console.log("http://localhost:8848");
});
