function isBigEnough(number){
    return number>10;
}

let a = [12, 5, 8, 130, 44].every(isBigEnough);
let b = [12, 54, 18, 130, 44].every(isBigEnough);

console.log(a);
console.log(b);