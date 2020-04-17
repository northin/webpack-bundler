import test from "./app.text";
import "../../common/unit.js";

console.log(test);
async function f1() {
  console.log("f1");
  const a = await f2();
  console.log(a);
  console.log("f3");
}
function f2() {
  return new Promise(function(res, rej) {
    setTimeout(function() {
      console.log("f2");
      res(2222);
    }, 200);
  });
}
f1();
console.log(Array.from(new Set([1, 2, 3, 2, 1])));
console.log("foobar".includes("foo"));
// const f1 = () => {
//   console.log("f1")
// }
// f1()
//
// const p = new Promise(function(resolve,reject){
//   console.log("p1")
//   resolve(1)
// }).then(function(value){
//   console.log("value")
// })
