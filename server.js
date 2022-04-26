const express = require("express");
const app = express();
const port = 8122;

app.use(express.static("."));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
