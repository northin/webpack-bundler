const path = require("path");
const mocha = require("mocha");
process.chdir(path.join(__dirname, "smoke/template"));
describe("test bunder-webpack case", () => {
  require("./unit/webpack.base.test");
});
