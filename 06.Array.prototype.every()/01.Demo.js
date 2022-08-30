const array1 = [1, 30, 39, 29, 10, 13];

const isBelowTreshold = (currentValue)=> currentValue<40;

console.log(array1.every(isBelowTreshold));