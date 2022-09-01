const myPromise = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("I love yoi!")
    }, 3000);
})

myPromise.then(function(value){
    console.log(value);
});