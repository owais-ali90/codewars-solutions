/* 
Description:
How can you tell an extrovert from an introvert at NSA?
Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

Test examples:

"EBG13 rknzcyr." -> "ROT13 example."

"This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"
*/
function rot13(str) {
    let newStr = ''
    for(let i = 0; i < str.length; i++){
      let temp = str[i].charCodeAt(0)
      if((temp < 78 && temp > 64)||(temp < 110 && temp > 96)){
        newStr += String.fromCharCode(temp + 13)
      }
      else if((temp < 91 && temp > 77)||(temp < 123 && temp > 109)){
        newStr += String.fromCharCode(temp - 13)
      }
      else{
        newStr += str[i]
      }
    }
    return newStr
    
  }
console.log(rot13("EBG13 rknzcyr."))
  /*
  Problem:
  https://www.codewars.com/kata/52223df9e8f98c7aa7000062
  */