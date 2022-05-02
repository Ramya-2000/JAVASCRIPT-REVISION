function number(arr, n){
  
    var res = {};
    var sol = []           //empty array to store the result 
    
    for (var i = 0; i < arr.length; i++) {
      if (res[arr[i]] >= n) {                   
        continue;
      } else if (res[arr[i]] === undefined) {  
        res[arr[i]] = 1                   //number of occurance
      } else {
        res[arr[i]]++                     //increase the count of occurance
      }
       sol.push(arr[i])
      }
    
      return sol;
    } 
    number([1,1,2,1,2,3,4,2],2);      //function call

//Expected output:
// (6) [1, 1, 2, 2, 3, 4]