const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise 1 fulfilled');
      resolve(1);
    }, 1000);        //after 1 second
  });
  
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise 2 fulfilled');
      resolve(2);
    }, 2000);       //after 2 seconds
  });
  
  const p = Promise.any([p1, p2]);       //print fulfilled which is first
  p.then((value) => {
    console.log('Returned Promise');
    console.log(value);
  });

// Promise 1 fulfilled
// Returned Promise
// 1
// Promise 2 fulfilled
  