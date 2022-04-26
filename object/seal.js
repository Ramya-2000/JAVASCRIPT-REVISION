const object1 = {
    prop1: 34
  };
  
  Object.seal(object1);
//   object1.prop1 = 007;
  object1.prop = 70;
  //Cannot update new property but we can modify property value  

  console.log(object1);
  // {prop1: 34} 
  
  delete object1; // cannot delete when sealed
  console.log(object1);
  