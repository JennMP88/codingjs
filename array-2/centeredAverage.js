// Array-2 -- centeredAverage
// Return the "centered" average of an array of ints, which we'll say is the mean average of the values, except ignoring the largest and smallest values in the array. If there are multiple copies of the smallest value, ignore just one copy, and likewise for the largest value. Use int division to produce the final average. You may assume that the array is length 3 or more.

// Examples

// centeredAverage([1, 2, 3, 4, 100]) → 3
// centeredAverage([1, 1, 5, 5, 10, 8, 7]) → 5.2
// centeredAverage([-10, -4, -2, -4, -2, 0]) → -3

function centeredAverage(nums){
  let withoutEndsRepeats
  let avg
  let sortedArr=nums.sort((a, b) => a - b)
 

//whats the diff between sortedArr.len and sortedArr.length
//why when i use .length inside for sortedArr.len>=3
//---console.log(centeredAverage([1, 1, 100]))// → 1)
//it's wrong. //
//yet .len doesn't work for console.log(centeredAverage([1, 1, 5, 5, 10, 8, 7]))// → 5.2
// and .length gives me 6---
//it gives me  console.log(withoutEndsRepeats)//[1,1,5,5,7,8,10]
//also is 6 correct and coding bats wrong?

  for(let i=0;i<sortedArr.length;i++){
    if(sortedArr[0]===sortedArr[1] && sortedArr.len>=3){
     sortedArr.splice(0,1)
    }

    if(sortedArr[sortedArr.length-1]===sortedArr[sortedArr.length-2] && sortedArr.len>=3){
      sortedArr.splice(sortedArr.length-1,1)

    }

   withoutEndsRepeats=sortedArr
  }
  
  console.log(withoutEndsRepeats)//[1,1,5,5,7,8,10]

  for(let i=0;i<withoutEndsRepeats.length;i++){
    arrLen=withoutEndsRepeats.length

    //even
    if(arrLen%2===0){
      let middle=withoutEndsRepeats[Math.floor(arrLen/2)]
      let prev=withoutEndsRepeats[(arrLen/2)-1]
      avg=(middle+prev)/2

    }
    //odd
     if(arrLen%2!==0){
      let middle=withoutEndsRepeats[Math.floor(arrLen/2)]
      avg=middle
    }

  }
  return avg
}
// console.log( centeredAverage([1, 2, 3, 4, 1,100]) ) //3
console.log(centeredAverage([1, 1, 5, 5, 10, 8, 7]))// → 5.2
// console.log( centeredAverage([-10, -4, -2, -4, -2, 0])) //→ -3
console.log(centeredAverage([1, 1, 100]))// → 1)

