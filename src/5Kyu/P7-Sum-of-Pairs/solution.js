
/*
Sum of Pairs
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.
sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]
*/
function sumPairs(ints, s) {
    let output = undefined
  let dictionary = {}
  for(let i = 0; i < ints.length; i++){
    if(dictionary[`${ints[i]}`]){
        output = []
      output[0] = s - ints[i]
      output[1] = ints[i]
      break
    }
    else{
      dictionary[`${s - ints[i]}`] = true
    }
  }
    return output;
}
console.log(sumPairs([11, 3, 7, 5], 10))
//Problem:
//https://www.codewars.com/kata/54d81488b981293527000c8f