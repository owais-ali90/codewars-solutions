Description:
/*Create a function that takes a positive integer and returns the next 
bigger number that can be formed by rearranging its digits. 
For example:

12 ==> 21
513 ==> 531
2017 ==> 2071

If the digits can't be rearranged to form a bigger number, return -1 
 9 ==> -1
111 ==> -1
531 ==> -1
*/
function nextBigger(n){
    let isPossible = false
    let digits = Array.from(String(n), Number);
    for(let i = 1; i < digits.length; i++){
        if(digits[i] > digits[i-1]){
            isPossible = true
        }
    }
    if(!isPossible){
        return -1
    }
    function merge(left, right) {
        let sortedArr = [] 
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                sortedArr.push(left.shift())
            } else {
                sortedArr.push(right.shift())
            }
        }
    return [...sortedArr, ...left, ...right]
    }
    function mergeSort(arr) {
        if (arr.length <= 1) return arr
        let mid = Math.floor(arr.length / 2)
        let left = mergeSort(arr.slice(0, mid))
        let right = mergeSort(arr.slice(mid))
        return merge(left, right)
    }
    for(let i = digits.length - 1; i > 0; i--){
        if(digits[i-1] < digits[i]){
            let arr = [...digits]
            let temparr = digits.slice(i).filter(ele => ele > digits[i-1])
            let temp = Math.min(...temparr)
            arr.splice(arr.lastIndexOf(temp),1)
            arr.splice(i-1,0,temp)
            arr.splice(i,digits.length - 1,...mergeSort(arr.slice(i)))
            return Number(arr.join(''))
        }
    }
}
console.log(nextBigger(2017))

// Problem
// https://www.codewars.com/kata/55983863da40caa2c900004e