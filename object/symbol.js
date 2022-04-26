const object1 = {};
const a = Symbol('a');
const b = Symbol.for('b');

object1[a] = 'localSymbol';
object1[b] = 'globalSymbol';
console.log(object1);
const objectSymbols = Object.getOwnPropertySymbols(object1);

console.log(objectSymbols.length);
// expected output: 2

console.log(objectSymbols);
//> Array [Symbol(a), Symbol(b)]


console.log(objectSymbols[1]);
// Symbol(b)

