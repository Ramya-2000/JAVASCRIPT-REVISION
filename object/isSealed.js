const object1 = {
    prop: 30
  };
  
  console.log(Object.isSealed(object1));
  //  false
  
  Object.seal(object1);
  
  console.log(Object.isSealed(object1));
  // true