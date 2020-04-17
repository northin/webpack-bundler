const path = require("path");
const mocha = require("mocha");
const assert = require("assert");
describe("test webpack.base.js case", () => {
  const baseConfig = require("../../lib/webpack.base");
  console.log(baseConfig);
  it("entry", () => {
    assert.equal(
      baseConfig.entry.index,
      "/Users/sj/Documents/Documents/webpack/myLoader/builder-webpack/test/smoke/template/src/index/index.js"
    );
    assert.equal(
      baseConfig.entry.search,
      "/Users/sj/Documents/Documents/webpack/myLoader/builder-webpack/test/smoke/template/src/search/index.js"
    );
  });

  it("output", () => {
    assert.equal(
      baseConfig.output.path,
      "/Users/sj/Documents/Documents/webpack/myLoader/builder-webpack/test/smoke/template/dist"
    );
  });
});
