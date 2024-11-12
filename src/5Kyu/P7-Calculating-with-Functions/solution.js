/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:

eight(dividedBy(three()));
*/
function zero(a) {
    if(a){
      switch(a[0]){
          case 'mul':
            return 0 * a[1] 
          break;
          case 'div':
            return Math.floor(0 / a[1])
          break;
          case 'add':
            return 0 + a[1]
          break;
          case 'sub':
            return 0 - a[1]
          break;
      }
    }
    else{
      return 0
    }
  }
  function one(a = null) {
    if(a){
      switch(a[0]){
          case 'mul':
            return 1 * a[1] 
          break;
          case 'div':
            return Math.floor(1 / a[1])
          break;
          case 'add':
            return 1 + a[1]
          break;
          case 'sub':
            return 1 - a[1]
          break;
      }
    }
    else{
      return 1
    }
  }
  function two(a = null) {
    if(a){
      switch(a[0]){
          case 'mul':
            return 2 * a[1] 
          break;
          case 'div':
            return Math.floor(2 / a[1])
          break;
          case 'add':
            return 2 + a[1]
          break;
          case 'sub':
            return 2 - a[1]
          break;
    }}
    else{
      return 2
    }
  }
  function three(a = null) {
    if(a){
      switch(a[0]){
          case 'mul':
            return 3 * a[1] 
          break;
          case 'div':
            return Math.floor(3 / a[1])
          break;
          case 'add':
            return 3 + a[1]
          break;
          case 'sub':
            return 3 - a[1]
          break;
      }
    }
    else{
      return 3
    }
  }
  function four(a = null) {
    if(a){
      switch(a[0]){
          case 'mul':
            return 4 * a[1] 
          break;
          case 'div':
            return Math.floor(4 / a[1])
          break;
          case 'add':
            return 4 + a[1]
          break;
          case 'sub':
            return 4 - a[1]
          break;
      }
    }
    else{
      return 4
    }
  }
  function five(a = null) {
    if(a){
      switch(a[0]){
          case 'mul':
            return 5 * a[1] 
          break;
          case 'div':
            return Math.floor(5 / a[1])
          break;
          case 'add':
            return 5 + a[1]
          break;
          case 'sub':
            return 5 - a[1]
          break;
      }
    }
    else{
      return 5
    }
  }
  function six(a = null) {
    if(a){
      switch(a[0]){
          case 'mul':
            return 6 * a[1] 
          break;
          case 'div':
            return Math.floor(6 / a[1])
          break;
          case 'add':
            return 6 + a[1]
          break;
          case 'sub':
            return 6 - a[1]
          break;
      }
    }
    else{
      return 6
    }
  }
  function seven(a = null) {
    if(a){
      switch(a[0]){
          case 'mul':
            return 7 * a[1] 
          break;
          case 'div':
            return Math.floor(7 / a[1])
          break;
          case 'add':
            return 7 + a[1]
          break;
          case 'sub':
            return 7 - a[1]
          break;
      }
    }
    else{
      return 7
    }
  }
  function eight(a = null) {
    if(a){
      switch(a[0]){
          case 'mul':
            return 8 * a[1] 
          break;
          case 'div':
            return Math.floor(8 / a[1])
          break;
          case 'add':
            return 8 + a[1]
          break;
          case 'sub':
            return 8 - a[1]
          break;
      }
    }
    else{
      return 8
    }
  }
  function nine(a = null) {
    if(a){
      switch(a[0]){
          case 'mul':
            return 9 * a[1] 
          break;
          case 'div':
            return Math.floor(9 / a[1])
          break;
          case 'add':
            return 9 + a[1]
          break;
          case 'sub':
            return 9 - a[1]
          break;
      }
    }
    else{
      return 9
    }
  }
  
  function plus(a=null) {
    return ['add', a]
  }
  function minus(a=null) {
    return ['sub', a]
  }
  function times(a=null) {
    return ['mul', a]
  }
  function dividedBy(a=null) {
    return ['div', a]
  }

  console.log(eight(dividedBy(three())))

  //Problem
  //https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript