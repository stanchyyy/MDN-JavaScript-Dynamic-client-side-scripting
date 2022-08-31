const paragraph = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
console.log(paragraph.replace("dog","monkey"));

const regex = /Dog/i;
console.log(paragraph.replace(regex,"pigeon"));