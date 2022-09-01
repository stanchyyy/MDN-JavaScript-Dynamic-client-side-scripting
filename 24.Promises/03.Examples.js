let books = [
    "JS Advanced",
    "JS Beginner",
    "JS Pro",
    "JS Master"
];

let theBookIWant = "C# does not have promises";

const GetTheBook = new Promise(function(resolve,reject){
    if(books.includes(theBookIWant)){
        resolve("Great news the book i want "+theBookIWant +" is available.");
    }
    else{
        reject("I'm very sad i have nowhere to read more about "+ theBookIWant+" .");
    }
});

GetTheBook.then(function(value){
    console.log(value);
}).catch(function(reason){
    console.log(reason);
});

