// Traditional Anonymous Function

const iife = (function(a,b){
    const chuck = 42;
    return a+b+chuck;
});

console.log(iife(1,2));

const arrowediife = (a,b)=>{
    const chuck = 42;
    return a+b+chuck;
}

console.log(arrowediife(3,4));