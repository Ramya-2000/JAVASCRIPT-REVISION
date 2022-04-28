class Person {
    constructor(name) {
        this.name=name;
    }
    getName() {
        return this.name;       //return the argument value 
    }
    setName(newName) {          //set the argument value
        if (newName === '') {
            return 'The name cannot be empty';
        }
        this.name = newName;
    }
}     
let person = new Person('javascript');                   
console.log(person); 

person.setName('python');
console.log(person.getName());    //return the value from set method

// Person { name: 'javascript' }
// python
