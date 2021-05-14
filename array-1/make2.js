// Array-1 -- make2
// Given 2 int arrays, a and b, return a new array length 2 containing, 
//as much as will fit, the elements from a followed by the elements from b. 
//The arrays may be any length, including 0, but there will be 2 or more elements available between the 2 arrays.

// Examples

// make2([4, 5], [1, 2, 3]) → 4,5
// make2([4], [1, 2, 3]) → 4,1
// make2([], [1, 2]) → 1,2

function make2(a, b){
  if(a.length===2){
    return a
  }
  if(b.length===2){
    return b
  }
  if(!a.length){return [b[0],b[1]]}
  if(!b.length){return [a[0],a[1]]}

  if(a.length>=1 && b.length>=1){
    return [a[0],b[0]]
  }
}
console.log(make2([4, 5], [1, 2, 3])) //→ 4,5