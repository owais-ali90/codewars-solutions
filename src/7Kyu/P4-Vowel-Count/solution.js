
/*
Description:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

Complexity: O(n)
*/
function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelCount = 0
    for(let i = 0; i < str.length; i++){
      if(vowels.includes(str[i])){
        vowelCount++
      }
    }
    return vowelCount;
  }
  console.log('pakistan')
  /*
  Problem:
  https://www.codewars.com/kata/54ff3102c1bad923760001f3
  */