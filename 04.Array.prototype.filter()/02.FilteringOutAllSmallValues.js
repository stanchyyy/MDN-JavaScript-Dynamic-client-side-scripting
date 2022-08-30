function IsBigEnough(number){
    return number>=10;
}

const filtered = [12, 5, 8, 130, 44].filter(IsBigEnough);
console.log(filtered);

function IsTooSmall(number){
    return number<=10;
}

const smallNumbers = [111,222,1,2,3,4].filter(IsTooSmall);

console.log(smallNumbers);