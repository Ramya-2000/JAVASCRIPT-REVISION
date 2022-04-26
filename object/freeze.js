const obj = {
    value: 20
  };
  
  Object.freeze(obj);
  
  obj.value = 48;
  // Throws an error in strict mode
  
  console.log(obj.value);
  // expected output: 20
  