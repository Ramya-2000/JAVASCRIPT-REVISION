const object1 = {
    name: 'abc',
    age: 42
  };
  
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }
  
  // expected output:
  // name:'abc'
  // age:42
  