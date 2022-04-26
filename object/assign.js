const target = { a: 1, b: 4 };
const source = { b: 1, c: 5 };
console.log(target);

const returnedTarget = Object.assign(target,source);
// {a:1,b:1,c:5}

// const returnedTarget = Object.assign(source,target);
//{b:4,c:5,a:1}
console.log(target);
// Object { a: 1, b: 1, c: 5 }

console.log(returnedTarget);
// Object { a: 1, b: 4, c: 5 }
