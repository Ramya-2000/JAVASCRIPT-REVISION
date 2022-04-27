const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The first promise has resolved');
      resolve(10);
    }, 1 * 1000);          //after 1 second
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The second promise has resolved');
      resolve(20);
    }, 2 * 1000);         //after 2 seconds
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The third promise has resolved');
      resolve(30);
    }, 3 * 1000);           //after 3 seconds
  });
  
  Promise.all([p1, p2, p3]).then((results) => {
    const total = results.reduce((p, c) => p + c);     //reduce will reduce function for array element
  
    console.log(`Results: ${results}`);
    console.log(`Total: ${total}`);
  });
  

// The first promise has resolved
// The second promise has resolved
// The third promise has resolved
// Results: 10,20,30
// Total: 60
