function convertToRoman(num) {

    var roNumerals = {
        M: Math.floor(num / 1000),
        CM: Math.floor(num % 1000 / 900),
        D: Math.floor(num % 1000 % 900 / 500),
        CD: Math.floor(num % 1000 % 900 % 500 / 400),
        C: Math.floor(num % 1000 % 900 % 500 % 400 / 100),
        XC: Math.floor(num % 1000 % 900 % 500 % 400 % 100 / 90),
        L: Math.floor(num % 1000 % 900 % 500 % 400 % 100 % 90 / 50),
        XL: Math.floor(num % 1000 % 900 % 500 % 400 % 100 % 90 % 50 / 40),
        X: Math.floor(num % 1000 % 900 % 500 % 400 % 100 % 90 % 50 % 40 / 10),
        IX: Math.floor(num % 1000 % 900 % 500 % 400 % 100 % 90 % 50 % 40 % 10 / 9),
        V: Math.floor(num % 1000 % 900 % 500 % 400 % 100 % 90 % 50 % 40 % 10 % 9 / 5),
        IV: Math.floor(num % 1000 % 900 % 500 % 400 % 100 % 90 % 50 % 40 % 10 % 9 % 5 / 4),
        I: Math.floor(num % 1000 % 900 % 500 % 400 % 100 % 90 % 50 % 40 % 10 % 9 % 5 % 4 / 1)
      };
      var roNuStr = "";
    
      for (var prop in roNumerals) {
        for (i = 0; i < roNumerals[prop]; i++) {
          roNuStr += prop;
        }
      }
      return roNuStr;
}
   
console.log(convertToRoman(8));
console.log(convertToRoman(2200));
console.log(convertToRoman(84));
console.log(convertToRoman(176));