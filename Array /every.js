function array(element, index, array) {
    return element >= 10;
  }
  [1, 5, 8, 13, 44].every(array);   // false
  [120, 54, 18, 13, 44].every(array); // true

  //Using arrow function

  [120, 5, 8, 13, 44].every(x => x >= 10);   // false



  