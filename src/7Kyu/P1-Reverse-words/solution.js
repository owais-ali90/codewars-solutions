/*
Description:
Complete the function that accepts a string parameter,
 and reverses each word in the string. 
 All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {
    let arrayOfWords = str.split(' ')
    return (arrayOfWords.map((element)=>(element.split('').reverse().join('')))).join(' ')
}
console.log(reverseWords('This is an example!'))

/*Problem
https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
*/