// Consider the leftmost and righmost appearances of some value in an array. 
//We'll say that the "span" is the number of elements between the two inclusive. 
//A single value has a span of 1. Returns the largest span found in the given array. (Efficiency is not a priority.)

// Examples

// maxSpan([1, 2, 1, 1, 3]) → 4
// maxSpan([1, 4, 2, 1, 4, 1, 4]) → 6
// maxSpan([1, 4, 2, 1, 4, 4, 4]) → 6

function maxSpan(nums){
  //1.store the first num in a variable 
  // 2.loop from the back and have a pointer looping backwards and if that matches step a then store it to a variable 
  //3.get index of the variable at step 1 
  // 4.get the idx of the i from the back
  // subtract both and store in another variable
 
  //....continue from step 1 and move one idx +1
  //...restart backwards loop to check new variable value in
   
  // for(let i=0;i<nums.length;i++){

  // }
  let largerDifference=0
  
  for(let i=0;i<nums.length;i++){
    let firstPoint=nums[i]
    
    for(let j=nums.length-1;j>=i;j--){
      let lastPoint = nums[j];

      if(firstPoint === lastPoint){
      // find the distance
      //   let lastPoint=j
        let distance=j-i+1;

        //is the distance greater than the largerDifference? 
        if(distance>largerDifference){
          largerDifference=distance
        }
        
        // console.log(largerDifference);

        break;

      }
    }
  }
  

  return largerDifference
}
console.log(maxSpan([1, 2, 1, 1, 3])) // → 4
console.log(maxSpan([1, 4, 2, 1, 4, 1, 4])) //6

// maxSpan([1, 2, 1, 1, 3]) // → 4
// maxSpan([1, 4, 2, 1, 4, 1, 4]) //6
// maxSpan([1, 4, 2, 1, 4, 4, 4]) // 6

// [1, 4, 2, 1, 4, 1, 4]
    // | 