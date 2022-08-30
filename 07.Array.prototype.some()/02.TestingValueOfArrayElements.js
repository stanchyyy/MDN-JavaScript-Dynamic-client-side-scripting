function isBiggerThan10(element){
        return element>10;
    }
    
let a = [2, 5, 8, 1, 4].some(isBiggerThan10);
let b = [12, 5, 8, 1, 4].some(isBiggerThan10);

console.log(a);
console.log(b);