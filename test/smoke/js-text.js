const glob = require("glob-all");
describe("Checking generated js files", () => {
  it("should generated js files", done => {
    const files = glob.sync(["./dist/index-*.js", "./dist/search-*.js"]);

    if (files.length > 0) {
      done();
    } else {
      throw new Error("no js files generated");
    }
  });
});
