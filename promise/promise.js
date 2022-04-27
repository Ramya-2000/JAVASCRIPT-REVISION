let p = new Promise((resolve, reject) => {          //create a promise 
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);              //after 3 seconds 
});
p.then((result) => {
    console.log(result);      //10
    return result * 2;        //then will  return the result 
});


// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: 20