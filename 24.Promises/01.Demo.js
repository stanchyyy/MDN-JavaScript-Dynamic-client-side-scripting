let keepsHerWord;
keepsHerWord = true;

const herPromise= new Promise(function(resolve,reject){
if(keepsHerWord){
    resolve("She kept her word.");
}
else{
    reject("She is unfaitful!");
}
});

herPromise.then(function(value){
    console.log(value);
});

herPromise.catch(function(reason){
    console.log(reason);
});

herPromise.finally(function(){
    console.log("Irrespectively of what she does i still love her.");
});
