// String-1 -- middleTwo
// Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri". The string length will be at least 2.

// Examples

// middleTwo('string') →
// middleTwo('code') →
// middleTwo('Practice') →

function middleTwo(str){
  if(str.length%2!==0){return str}
  
  else if (str.length>=2){
 
  let first=Math.floor((str.length-1)/2)
  let next=first+1


  return str[first]+str[next]

    }
  }