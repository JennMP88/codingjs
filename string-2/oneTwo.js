// String-2 -- oneTwo
// Given a string, compute a new string by moving the first char to come after the next two chars, 
//so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars, so "abcdef" yields "bcaefd". 
//Ignore any group of fewer than 3 chars at the end.

// Examples

// oneTwo('abc') → bca
// oneTwo('tca') → cat
// oneTwo('tcagdo') → catdog

function oneTwo(str){
  let arr=[]
  // cut string in groups of three up to the end of the string
  if(str.length<3){return str}
  if(str.length>=3){
    let string=""
    //chars to move 
    //idx 0, after to idx2 +2     
    //3 idx, after to idx5 +2
    //6 idx, after to idx8 +2
    for(let i=0;i<str.length;i++){
      if(i===0 || i%3===0){
        console.log(str[i])  //tg
        arr.push(i) 
      }
    }
    for(let i=0;i<arr.length;i++){ //[0,3]
      let sliced=str.slice(arr[i],arr[i]+1)
      //put sliced word into +2 position
      string+=`${sliced}`
    }
    return string
 }
}
// console.log(oneTwo('abc') ) //bca
// console.log(oneTwo('tca') ) //cat
console.log(oneTwo('tcagdo')) //catdog