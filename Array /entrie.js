const array1 = ['anc','jki','dko'];

const ar1 = array1.entries();

console.log(ar1.next().value);
// expected output: Array [0, "anc"]

console.log(ar1.next().value);
// expected output: Array [1, "jki"]
