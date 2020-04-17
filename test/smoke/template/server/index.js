if (typeof window == "undefined") {
  global.window = {};
}
const fs = require("fs");
const path = require("path");
const express = require("express");
const { renderToString } = require("react-dom/server");
const SSR = require("../distSsr/search-server");
const template = fs.readFileSync(
  path.join(__dirname, "../distSsr/search.html"),
  "utf-8"
);
function server(port) {
  const app = express();
  app.use(express.static("distSsr"));
  app.get("/search", (req, res) => {
    console.log(renderToString(SSR));
    res.status(200).send(markUp(renderToString(SSR)));
  });
  app.listen(port, () => {
    console.log("server is running on:" + port);
  });
}
function markUp(str) {
  return template.replace("<!-- HTML_PLACEHOLDER -->", str);
}
server(3000);
