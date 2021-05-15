function mirrorEnds(string){
  let bwards=""
  let j=1
//loops forward
  for(let i=0;i<string.length;i++){
    if(string[i]===string[string.length-j]){
      bwards+=string[string.length-j]
      j++
    } else {
      break
    }
  }
  return bwards
}
// ​----------------------------------------------------
/*
	Alejo's Approach (both are valid)
*/
// ​
// function mirrorEnds(string){
//   let bwards=""
 
//   let i = 0
//   while(i < string.length && string[i]===string[(string.length-i) - 1]){
//     bwards+=string[i]
//     i++
//   }
//   return bwards
// }