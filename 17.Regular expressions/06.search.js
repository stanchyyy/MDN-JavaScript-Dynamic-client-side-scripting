const sentence = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
const regex = /[^\w\s]/g;
console.log(sentence.search(regex));

console.log(sentence[sentence.search(regex)]);