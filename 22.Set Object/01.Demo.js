const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add(99);

console.log(mySet);

mySet.add("black sheep");

const o = {a:11,b:22};
mySet.add(o);

console.log("Is there 99 :"+mySet.has(99));

console.log("Before deleting element: "+ mySet.size);
mySet.delete(1);
console.log("After deleting element :"+mySet.size);


