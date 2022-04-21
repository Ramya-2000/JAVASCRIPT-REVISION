function big(value) {
    return value >= 10
  }
  
  let filtered = [120, 50, 8, 13, 44].filter(big)
  // filtered is [120,50,13,44]


  //
const alpha= ['java' ,'limit', 'python', 'present'];

const result = alpha.filter(word => word.length > 4);

console.log(result);
// expected output: Array ['limit', 'python', 'present'];

  