Description:
/*
Write a function that takes a string of braces, 
and determines if the order of the braces is valid. 
It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, 
but introduces new characters: brackets [], and curly braces {}. 
Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, 
brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched 
with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False */

function validBraces(braces){
    let dictionary = {
           ')': '(',
           ']': '[',
           '}': '{',
       }
     let stack = [braces[0]]
     for(let i = 1; i < braces.length; i++){
       if(stack[stack.length-1] === dictionary[braces[i]]  && stack.length > 0 ) stack.pop()
       else stack.push(braces[i])
     }
     return stack.length == 0
   }

   console.log(validBraces('(){}[]'))

   /*
   Problem:
   https://www.codewars.com/kata/5277c8a221e209d3f6000b56
   */