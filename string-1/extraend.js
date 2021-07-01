// // String-1 -- extraEnd
// Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.

// Examples

// extraEnd('Hello') → lololo
// extraEnd('ab') → ababab
// extraEnd('Hi') → HiHiHi

function extraEnd(str){
  let lastTwo=str.slice(str.length-2)
  
  return `${lastTwo}${lastTwo}${lastTwo}`
}
// ----------------Alternative Solution
// function extraEnd(str){
//   let sliced=str.slice(str.length-2)
//   return sliced.repeat(3)
// }
