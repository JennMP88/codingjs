// Array-2 -- either24
// Given an array of ints, return true if the array contains a 2 next to a 2 or a 4 next to a 4, but not both.

// Examples

// either24([1, 2, 2]) → true
// either24([4, 4, 1]) → true
// either24([4, 4, 1, 2, 2]) → false
function either24(nums){
  let copy=[...nums]
  let str
  for(let i=0;i<nums.length;i++){
    if(nums[i]===2 && nums[i+1]===2){
     nums.splice(i,2)
    }
  }
  if(copy.length!==nums.length){
    
  }
  
}
console.log(either24([4, 4, 1, 2, 2])) //false
