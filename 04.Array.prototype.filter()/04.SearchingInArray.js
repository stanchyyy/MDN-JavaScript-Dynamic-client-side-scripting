const array1 = ["Gregory","Greg","Gregji","George","Jonathan"];

function search(arr,query){
    return arr.filter((element)=>element.toLowerCase().includes(query.toLowerCase()));
}

console.log(search(array1,"Greg"));


function mapped(arr,value){
    return arr.map((element)=>element+=value);
}

console.log(mapped(array1,333));

function simpleSearch(element,index,array){
    return element.length>6;
}

console.log(array1.filter(simpleSearch));