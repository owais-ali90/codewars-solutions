/*
In this simple Kata your task is to create a function that turns 
a string into a Mexican Wave. You will be passed a string and you
 must return that string in an array where an uppercase letter is
  a person standing up.
  
   1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as 
 if it was an empty seat

 wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/

function wave(str){
    let mWave = []
    for(let i = 0; i < str.length; i++){
      if(str[i] !== ' ') mWave.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i+1))
    }
    return mWave
  }

console.log(wave('hello'))

  //Problem:
  //https://www.codewars.com/kata/58f5c63f1e26ecda7e000029