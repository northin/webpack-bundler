const path = require("path");
const mocha = require("mocha");
const assert = require("assert");
describe("test webpack.base.js case", () => {
  const baseConfig = require("../../lib/webpack.base");
  console.log(baseConfig);
  it("entry", () => {
    assert.equal(
      baseConfig.entry.index.includes("test/smoke/template/src/index/index.js"),
      true
    );
    assert.equal(
      baseConfig.entry.search.includes(
        "test/smoke/template/src/search/index.js"
      ),
      true
    );
    // assert.equal(
    //   baseConfig.entry.search,
    //   "/Users/sj/Documents/Documents/webpack/myLoader/builder-webpack/test/smoke/template/src/search/index.js"
    // );
  });

  it("output", () => {
    assert.equal(
      baseConfig.output.path.includes("test/smoke/template/dist"),
      true
      // "/Users/sj/Documents/Documents/webpack/myLoader/builder-webpack/test/smoke/template/dist"
    );
  });
});
