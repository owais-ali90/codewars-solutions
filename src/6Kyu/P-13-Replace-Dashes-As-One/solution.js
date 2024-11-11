/*
Description:
Task
If string has more than one neighboring dashes(e.g. --) replace they 
with one dash(-).

Dashes are considered neighbors even if there is some whitespace between 
them.

Example
For str = "we-are- - - code----warriors.-"

The result should be "we-are- code-warriors.-"

Input/Output
[input] string str

[output] a string
*/

function replaceDashesAsOne(str) {
    return str.replace(/-[- ]*-/g,'-')
    
  }
  console.log(replaceDashesAsOne("we-are- - - code----warriors.-"))

  // Problem
  // https://www.codewars.com/kata/58af9f7320a9ecedb30000f1