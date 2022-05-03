function a1() {
    console.log('Hi by python!');
    }
    
    function a2() {
    a1();                           //a1() function gets called inside the a2() function. 
    console.log('Hi by java!');
    }
    
    a2();                          
                                                 //  Hi by python!
                                                //  Hi by java!