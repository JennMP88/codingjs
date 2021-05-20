// Array-2 -- sum13
// Return the sum of the numbers in the array, returning 0 for an empty array. Except the number 13 is very unlucky, so it does not count and numbers that come immediately after a 13 also do not count.

// Examples

// sum13([1, 2, 2, 1]) → 6
// sum13([1, 1]) → 2
// sum13([1, 2, 2, 1, 13]) → 6

function sum13(nums){
  let count=0;
  let arr=[]
  
  //zero for an empty array
  if(nums.length===0){
    return 0
  }
  
  //cut off nums 13 and those immediately after
  //assigd new arr copy to arr
  for(let i=0;i<nums.length;i++){
    let cut
    if(nums[i]>13 || nums[i]===13){
     cut= nums.splice(i,2) //13
     arr=nums
    }
    else {
      count+=nums[i]
    }
  }
 
 //add all nums in the new arr
  for(let i=0;i<arr.length;i++){
    count+=arr[i]
  }
   return count
 }
 console.log(sum13([1, 2, 2, 1]))// → 6
 console.log(sum13([1, 2, 13, 2, 1, 13]) )// → 4