/*

Description:
The drawing shows 6 squares the sides of which have a length 
of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters
 of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

Could you give the sum of the perimeters of all the squares in a
 rectangle when there are n + 1 squares disposed in the same manner 
 as in the drawing:
*/

function perimeter(n) {
    let n1 = 1
    let n2 = 2
    let result = 1
    for(let i = 0; i < n; i++){
      temp = n1 + n2
      result += n1
      n1 = n2
      n2 = temp
      
    }
    return (result*4)
  }
  console.log(perimeter(5))

  //Problem
  //https://www.codewars.com/kata/559a28007caad2ac4e000083