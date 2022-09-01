function sum(a,...restB){
    let result = a;
    for(const number in restB){
        result+=number;
    }
    return result;
}

console.log(sum(1,2,3,4,5,6));