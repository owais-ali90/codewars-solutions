/*Description:
Implement the function unique_in_order which takes as argument a sequence 
and returns a list of items without any elements with the same value next 
to each other and preserving the original order of elements.*/

/* Examples:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

/*Complexity: O(n)
*/

var uniqueInOrder=function(iterable){
    let lastEle = null
    
    let array = `${iterable}`.split('').filter(ele => {
      if(ele !== lastEle &&  /[A-Za-z0-9]/.test(ele)){
        lastEle = ele
        return true
      }
      return false
    }).map(ele => {
      if(/[0-9]/.test(ele)) return Number(ele)
      else return ele
    })
    
    return array
  }

  console.log(uniqueInOrder('AAAABBBCCDAABBB'))

  /*Problem
  https://www.codewars.com/kata/54e6533c92449cc251001667
  */