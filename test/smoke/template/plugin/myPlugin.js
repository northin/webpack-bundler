function MyPlugin(options) {}

MyPlugin.prototype.apply = function(compiler) {
  compiler.hooks.done.tapPromise("sendWebpackPlugin", compilation => {
    console.log("send something！");
    return new Promise(() => {
      return 1;
    });
  });

  compiler.hooks.run.tap("ConsoleLogOnBuildWebpackPlugin", compilation => {
    console.log("webpack 构建过程开始！");
    // console.log(compilation.chunks)
    // compilation
    // console.log(Object.keys(compilation))
  });

  // 编译器对开始编译这个事件监听
  // compiler.plugin("compile",function(){
  //     console.log("start compile")

  // })
  // compilation（'编译器'对'编译ing'这个事件的监听）
  // compiler.plugin("compilation", function(){
  //     console.log("The compiler is starting a new compilation...")

  // })

  // compiler.plugin("emit", function(compilation,callback){
  //     console.log("The compilation is going to emit files...");
  // })
};
module.exports = MyPlugin;
