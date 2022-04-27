const p1 = new Promise((resolve, reject) => {        //create promise 
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);              //after 1 second

});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has resolved');
        resolve(20);
    }, 2 * 1000);                         //after 2 seconds
});


Promise.race([p1, p2])
    .then(value => console.log(`Resolved: ${value}`))           //returns 10
    .catch(reason => console.log(`Rejected: ${reason}`));       //second promise has resolved

    // The first promise has resolved
    // Resolved: 10
    // The second promise has resolved
    