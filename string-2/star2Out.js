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
  let result=""

  for(let i=0;i<str.length;i++){
    let current=str[i]
    let next=str[i+1]
    let previous=str[i-1]

    if(next==="*"){
      str[i+2]
    } 
    if(current==="*"){
      str[i+1]
    }
    if (previous==="*"){
      str[i+1]
    }
    
  if (current!=="*" ||previous!=="*" || next!=="*"){
    result+=str[i]
  }
 
  }
  return result
}

console.log(starOut('ab**cd') ) //ad