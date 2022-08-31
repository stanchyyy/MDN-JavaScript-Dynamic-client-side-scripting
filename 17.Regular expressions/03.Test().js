let str1 = "foo wants to play";
let re = new RegExp("foo*");
const globalRe = new RegExp("foo*","g");

console.log(re.test(str1));
console.log(globalRe.lastIndex);
console.log(globalRe.test(str1));
console.log(globalRe.lastIndex);
console.log(globalRe.test(str1));

const str2 = "hello world.";
const result = /^hello/.test(str2);
