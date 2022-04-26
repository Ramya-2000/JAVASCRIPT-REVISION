const object1 = {
    property1: 50
  };
  
  const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');
  
  console.log(descriptor1.configurable);
  // expected output: true
  
  console.log(descriptor1.value);
  // expected output: 50
  