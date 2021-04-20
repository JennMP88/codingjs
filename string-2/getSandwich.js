// String-2 -- getSandwich
// A sandwich is two pieces of bread with something in between. 
//Return the string that is between the first and last appearance of "bread" in the given string,
// or return the empty string "" if there are not two pieces of bread.

// Examples

// getSandwich('breadjambread') → jam
// getSandwich('xxbreadjambreadyy') → jam
// getSandwich('xxbreadyy') →

function getSandwich (str){
  let string=""
  let word="bread"
  let wordLengthIdx=word.length-1 //idx 4
  let arr=[]

  for(let i=0;i<str.length;i++){
    if(str[i]==="b"){
     arr.push(i)
    }
  }
  for(let j=0;j<arr.length;j++){
     //arr[0,8], [1,9,14]
     
    
  }


}
console.log(getSandwich('breadjambread'))//→ jam
console.log(getSandwich('xbreadjambreadbryy'))//→ jam