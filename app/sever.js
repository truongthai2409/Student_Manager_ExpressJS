const express = require("express");
const router = require("./router/root.router");
const app = express();
const port = 2002;

//chuyển req về json để thuận tiện thao tác
// .use() cấu hình res-req , sử dụng

app.use(express.json());
app.use(router); 

app.get("/", (req, res) => {
  //(req, res) là hàm xử lý
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log("listening port http://localhost:" + port);
});
