const PORT = process.env.PORT;
const express = require("express");
const app = express();

// Hello Worldを表示させる
app.get("/", (req, res) => {
  res.end("Hello World");
});
// サーバーの起動処理
app.listen(PORT, () => {
  console.log("PORT", PORT);
});
