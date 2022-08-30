const sparseArray = [1,2,3, ,5,6];
let numCallbacksRun=0;
sparseArray.forEach(element=>{
    console.log({element});
    numCallbacksRun++;
})
console.log({numCallbacksRun});
