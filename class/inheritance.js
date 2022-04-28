// parent class
class Person { 
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
// inheriting parent class
class Student extends Person {       //Student is derived class which inherit all the properties of base class
}
let student1 = new Student('Jack');
student1.greet();


// expected output: Hello Jack
