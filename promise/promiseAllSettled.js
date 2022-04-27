const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);

});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has rejected');
        reject(20);
    }, 2 * 1000);
});

Promise.allSettled([p1, p2])
    .then((result) => {
        console.log(result);
    });





// Promise {<pending>}
//     [[Prototype]]: Promise
//     [[PromiseState]]: "fulfilled"
//     [[PromiseResult]]: undefined
//  The first promise has resolved
//  The second promise has rejected
// (2) [{…}, {…}]0: {status: 'fulfilled', value: 10}
// 1: {status: 'rejected', reason: 20}
// length: 2
// [[Prototype]]: Array(0)