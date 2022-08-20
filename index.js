const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.send("hello world!");
  console.log(response);
});

app.listen(3000);
