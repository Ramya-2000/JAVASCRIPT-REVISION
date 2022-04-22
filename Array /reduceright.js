const num1 = [0, 1, 2, 3, [4, 5]].reduceRight(
    (accum, currentValue) => accum.concat(currentValue)
  );
  
  console.log(num1);
  //  Array [4, 5, 2, 3, 0, 1]
  