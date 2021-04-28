// String-2 -- starOut
// Return a version of the given string,
//  where for every star (*) in the string the star and the chars 
//  immediately to its left and right are gone. So "ab*cd" yields "ad" and "ab**cd" 
// also yields "ad".
// Examples

// starOut('ab*cd') → ad
// starOut('ab**cd') → ad
// starOut('sm*eilly') → silly

function starOut(str){
  let regEx=/[\*]/g
  let string=str.split("")
  for(let i=0;i<string.length;i++){
    

    if(string[i+1].match(regEx)){
      string.splice(i+2,1) 
      // string.splice(i,1) 
      // string.splice(i-1,1)   
    } 
    
    // console.log(string,"here")
 
  }
  return string.join("")
}
// console.log(starOut('ab**cd') ) //ad
console.log(starOut('ab**cd') ) //ad