/*
Description:
Move the first letter of each word to the end of it, then
 add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
    let words = str.split(' ')
    return words.map(ele=>{
      if(ele.match(/[)'",.:;!&(?]/g) ){   
        return ele
      }
      return ele.slice(1, ele.length) + ele[0] + 'ay'
  
    }).join(' ')
  }
console.log(pigIt('Pig latin is cool'))
  /*
  Problem:
  https://www.codewars.com/kata/520b9d2ad5c005041100000f
  */