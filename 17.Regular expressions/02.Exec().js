const regex1 = new RegExp("foo*","g");
const str1 = "table football, foosball";
let array1;

while((array1=regex1.exec(str1))!==null){
    console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
}


let foundYou = regex1.exec(str1);


console.log(foundYou);