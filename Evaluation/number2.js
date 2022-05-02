function digital_root(n) {               
    var digits = n.toString().split("").map(Number);   //split for spliting individual digits
    var sum = 0;
    for (var i = 0; i < digits.length; i++) {         //iterate over the digits
      sum += digits[i];
    }
    var sumString = sum.toString();
    if (sumString.length > 1) {
      var sumDigits = sumString.split("").map(Number);
      var firstSumDigit = sumDigits.slice(0);            //slice(0) is to take first digit
      var lastSumDigit = sumDigits.slice(-1);            //slice(-1) is to take last digit
      return firstSumDigit[0] + lastSumDigit[0];         
    } else {
        return sum;
    }
  }
  digital_root(6834);         //function call 



  //expected output: 3
