/*

Description:
Write a function that takes an integer as input, and returns 
the number of bits that are equal to one in the binary representation 
of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the 
function should return 5 in this case
*/
var countBits = function(n) {
    let sum = 0
    while(n>0){
      sum += n%2
      n  = Math.floor(n/2)
    }
    return sum
  };
console.log(countBits(1234))
  // Problem
  // https://www.codewars.com/kata/526571aae218b8ee490006f4