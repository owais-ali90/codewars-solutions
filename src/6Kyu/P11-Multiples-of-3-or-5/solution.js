/*

Description:
If we list all the natural numbers below 10 that are multiples of 3 or 5,
 we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 
or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/
function solution(number){
    if(number < 0) return 0
     let n3 = Math.floor((number - 1) / 3)
    let n5 = Math.floor((number - 1) / 5)
    let nCommon = Math.floor((number - 1) / 15)
    let sum3 = (n3/2)*((2*3) + (n3 - 1)*(3))
    let sum5 = (n5/2)*((2*5) + (n5 - 1)*(5))
    let sumCommon = (nCommon/2)*((2*15) + (nCommon - 1)*(15))
    return sum3 + sum5 - sumCommon
  }
  console.log(solution(30))

  // Problem:
  // https://www.codewars.com/kata/514b92a657cdc65150000006