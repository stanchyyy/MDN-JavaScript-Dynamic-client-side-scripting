const mySet = new Set();
mySet.add("a");
mySet.add("z");
mySet.add(99);

for(let set of mySet){
    console.log(set);
}

for(let set of mySet.keys()){
    console.log("key : "+set);
}

for(let set of mySet.values()){
    console.log("values : "+set);
}