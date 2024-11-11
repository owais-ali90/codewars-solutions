
/*
Description:
Write a function that takes a positive integer and returns the
 next smaller positive integer containing the same digits.

For example:
nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017

Return -1 (for Haskell: return Nothing, for Rust: return None), 
when there is no smaller number that contains the same digits. 
Also return -1 when the next smaller number with the same digits
 would require the leading digit to be zero.

nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write 
numbers with leading zeros
*/
function nextSmaller(n) {
    let isPossible = false;
    let digits = Array.from(String(n), Number);

    for (let i = 1; i < digits.length; i++) {
        if (digits[i] < digits[i - 1]) {
            isPossible = true;
        }
    }
    if (!isPossible) {
        return -1;
    }

    function merge(left, right) {
        let sortedArr = [];
        while (left.length && right.length) {
            if (left[0] > right[0]) {
                sortedArr.push(left.shift());
            } else {
                sortedArr.push(right.shift());
            }
        }
        return [...sortedArr, ...left, ...right];
    }

    function mergeSort(arr) {
        if (arr.length <= 1) return arr;
        let mid = Math.floor(arr.length / 2);
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));
        return merge(left, right);
    }

    for (let i = digits.length - 1; i > 0; i--) {
        if (digits[i - 1] > digits[i]) {
            let arr = [...digits];
            let temparr = digits.slice(i).filter(ele => ele < digits[i - 1]);
            let temp = Math.max(...temparr);
            arr.splice(arr.lastIndexOf(temp), 1);
            arr.splice(i - 1, 0, temp);
            arr.splice(i, digits.length - 1, ...mergeSort(arr.slice(i)));
            
            if (arr[0] === 0) return -1;
            
            return Number(arr.join(''));
        }
    }
}
console.log(nextSmaller(24376)) // output --> 24367

// Problem
// https://www.codewars.com/kata/5659c6d896bc135c4c00021e