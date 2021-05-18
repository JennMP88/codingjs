// Given a string, return the longest substring 
// that appears at both the beginning and end of 
// the string without overlapping. For example, 
// sameEnds("abXab") is "ab".

// Examples

// sameEnds('abXYab') → ab
// sameEnds('xx') → x
// sameEnds('xxx') → x

function sameEnds(str){
let string=""
let num=0
  for(let i=0;i<str.length;i++){
    let back=str.length-1
    if(str[i]===str[num] && i!==0){
      string+=str[i]
      num++
    }
  }
return string
} 
console.log(sameEnds('abXYab')) //ab
console.log(sameEnds('xavaXYZjava')) //""
console.log(sameEnds('mymmy'))//my