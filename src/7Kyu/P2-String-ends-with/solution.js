/*
Description:
Complete the solution so that it returns true 
if the first argument(string) passed in ends 
with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

Complexity: O(n)
*/
function solution(str, ending){
    if(ending.length > str.length) return false
    let diff = str.length - ending.length
    
    let isEndsWith = true
    for(let i = ending.length-1; i > -1; i--){
      if(str[diff + i] !== ending[i]){
        isEndsWith = false
        break
      }
    }
    return isEndsWith
  }
  console.log(solution('Apabc', 'bc'))

  /*
Problem:
https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
   */