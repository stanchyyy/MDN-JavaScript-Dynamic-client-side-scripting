let a = JSON.parse('{"p":5, "q":"baba"}', (key, value)=>{
    if(typeof(value)==="number"){
        return value*2;
    }
    else{
        return value;
    }
});


console.log(a);

let b = JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}',(key, value)=>{
console.log(key);
return value;
});

console.log(b);