const expression = "i can do anything";
const obj1 = {
    get [expression](){return "but i have no money"}
};

console.log(obj1["i can do anything"]);

const girl1 = "Alex";
const obj2 = {
    get [girl1](){return "Nacheva"}
}

console.log(obj2.Alex);