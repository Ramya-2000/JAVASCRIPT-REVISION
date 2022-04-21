const employee = [
    {name: 'id', quantity: 2},
    {name: 'quality', quantity: 0},
    {name: 'experience', quantity: 5}
  ];
  
  function isDetail(fruit) {
    return fruit.name === 'experience';
  }
  
  console.log(employee.find(isDetail));
  
  //{ name: 'experience', quantity: 5 }
