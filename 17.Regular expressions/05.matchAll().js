const regex = /t(e)(st(\d?))/g;
const str1 = "test1test2";
const array = [...str1.matchAll(regex)];

console.log(array[0]);
console.log(array[1]);