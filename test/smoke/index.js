const webpack = require("webpack");
const rimraf = require("rimraf");
const path = require("path");
const Mocha = require("mocha");
process.chdir(path.join(__dirname, "template"));

const mocha = new Mocha({
  timeout: "10000ms"
});
rimraf("./dist", () => {
  const proConfig = require("../../lib/webpack.prod.js");
  webpack(proConfig, (err, stats) => {
    if (err) {
      console.err(err);
      process.exit(2);
    }
    console.log(
      stats.toString({
        colors: true,
        modules: false,
        children: false
      })
    );
    console.log("webpack build success, begin run text");
    mocha.addFile(path.join(__dirname, "html-text.js"));
    mocha.addFile(path.join(__dirname, "js-text.js"));
    mocha.run();
  });
});
