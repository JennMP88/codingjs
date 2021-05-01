// Given two strings, base and remove, return a version of the base string where all instances of the remove string have been removed (not case sensitive). You may assume that the remove string is length 1 or more. Remove only non-overlapping instances, so with "xxx" removing "xx" leaves "x".

// Examples

// withoutString('Hello there', 'llo') → He there
// withoutString('Hello there', 'e') → Hllo thr
// withoutString('Hello there', 'x') → Hello there

function withoutString(base, remove){

  // loop through string base 
  // find where string is equal to remove
  // if string at that idx is remove move to next i
  // and copy next i and check that next ietc equal to remove
  //   if it's not then copy that i to string
 let len=remove.length
 let string=""

 for(let i=0; i<base.length;i++){
   let sliced=base.slice(i,len+i)

    if(sliced.toLowerCase()===remove.toLowerCase(){
      i+=len-1
    }
   else {
     string+=base[i]
   }

 }
 return string

}
​
// or with a while loop
​
// function withoutString(base, remove){
//   let res = ""
//   let i = 0;
//   while (i < base.length) {
//     let substr = base.slice(i, i + remove.length)
//     if (substr.toLowerCase() === remove.toLowerCase()) {
//       i += substr.length
//     } else {
//       res += base[i]
//       i++
//     }
//   }
//   return res
// }
console.log(withoutString('Hello there', 'llo') )// → He there
console.log(withoutString('Hello there', 'e'))// → Hllo thr
console.log(withoutString('Hello there', 'x'))// → Hello there