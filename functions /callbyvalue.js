//call by value
let a=5;
b=a;
a=40;
console.log(a);     //original value no change
console.log(b);


//call by reference
    var c = { greeting : 'Welcome' };
    var d;
    d = c;
  
    // Mutating the value of c
    c.greeting = 'Welcome to javascript';
    console.log(c);
    console.log(d);

    // {greeting: "Welcome to javascript"}
    // {greeting: "Welcome to javascript"}




