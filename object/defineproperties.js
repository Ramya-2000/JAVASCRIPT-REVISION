const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    name:"abi",
  },
  property2: {}
});

console.log(object1.property1);
// expected output: 42
