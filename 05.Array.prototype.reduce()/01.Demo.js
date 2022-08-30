const array = [1,2,3,4];
const initialValue = 0;

const sumWithInitial = array.reduce((previousValue, currentValue)=>previousValue+currentValue,
initialValue
);

console.log(sumWithInitial);

const array1 = ["My","family","above","all","."];

const message = array1.reduce((previousValue,currentValue)=>previousValue+currentValue);
let message2 = array1.reduce((previousValue,currentValue)=>{
    if(currentValue!=="."){
        return previousValue+" "+currentValue;
    }
    else{
        return previousValue+currentValue;
    }
});

console.log(message);
console.log(message2);