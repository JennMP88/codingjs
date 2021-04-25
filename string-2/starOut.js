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
  // let splitStr=str.split("")
 

  // for(let i=0;i<splitStr.length;i++){
  //   if(str[i]==="*"){
  //     splitStr.splice(i-1,1)
  //     console.log(splitStr, "here")
  //   }
  // }

  // for(let i=0;i<splitStr.length;i++){
  //   if(str[i]==="*"){
  //     splitStr.splice(i+1,1)
  //     console.log(splitStr, "here")
  //   }

  // if(str[i]==="*"){
  //   splitStr.splice(i,1)
  // }
  //     str=splitStr.join("")
  // }
  
  // return str
}
console.log(starOut('ab*cd') ) //ad