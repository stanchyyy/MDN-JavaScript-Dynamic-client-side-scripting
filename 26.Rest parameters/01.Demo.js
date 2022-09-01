function sum(...theArgs){
    let sum =0;
    for(let number of theArgs){
        sum+=number;
    }
    return sum;

}

console.log(sum(1,2,3,4,5,6,6));

function multiply(...theArgs){
    let result = 1;
    for(let number of theArgs){
        result*=number;
    }
    return result;
}

console.log(multiply(2,2,2,2));