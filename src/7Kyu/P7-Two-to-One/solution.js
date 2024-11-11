
/*
Description:
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/
function longest(s1, s2) {
    let newStr = s1 + s2
    let alphabets = new Array(26).fill(false)
    for(let i = 0; i < newStr.length; i++){
      alphabets[newStr[i].charCodeAt(0) - 97] = true
    }
     let final = ""
    alphabets.forEach((cur, i)=>{
      if(cur) final += String.fromCharCode(i + 97)
    })
    return final
  }

let a = "xyaabbbccccdefww"
let b = "xxxxyyyyabklmopq"
console.log(longest(a, b))

//Problem
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac