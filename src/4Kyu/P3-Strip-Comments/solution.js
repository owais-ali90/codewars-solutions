
/*
Description:
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:
Given an input string of:
apples, pears # and bananas
grapes
bananas !apples

The output expected would be:
apples, pears
grapes
bananas

*/
function solution(text, markers) {
    if(markers.length == 0) return text.trimEnd()
      let flag = true
    console.log(text.length)
      text = text.replace(/\n/g,"\\n")
      let newStr = []
      for(let i = 0; i < text.length; i++){
        if(!text[i].match(/\w/)){
           if(text[i] == "\\" && text[i+1] === 'n'){
                flag = true
                newStr.push(text[i])
               
            }
            else if(markers.includes(text[i])){
                flag = false
            }
            else if(text[i] === " " && markers.includes(text[i+1])){
                flag = false
              
            }
           
            else{
                flag && newStr.push(text[i]) 
               
            }
        }
        else{
            if(flag){
                
            newStr.push(text[i])
              
            }
             
        }
     
    }
    return newStr.join("").trimEnd().replace(/\\n/g,"\n")
  
  }
  console.log(solution('apples, pears # and bananas'))

  // Problem 
  // https://www.codewars.com/kata/51c8e37cee245da6b40000bd