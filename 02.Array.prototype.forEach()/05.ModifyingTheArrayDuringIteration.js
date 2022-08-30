const words = ["one","two","three","four"];
words.forEach((word)=>{
    console.log(word);
    if(word==="two"){
        words.shift();
    }
})

console.log(words);