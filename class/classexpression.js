const Website = class  {         //unamed class
    constructor(name){
        this.name = name;
    }
    websiteName() {
        return this.name;
    }
    };
    
    const x = new Website("javascript");     //instance of class
    console.log(x.websiteName());                
    
    //javascript