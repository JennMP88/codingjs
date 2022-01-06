// Array-3 -- fix34
// Return an array that contains exactly the same numbers as the given array,
// but rearranged so that every 3 is immediately followed by a 4. Do not move the 3's, 
//but every other number may move. 
//The array contains the same number of 3's and 4's, every 3 has a number after it that is not a 3, and a 3 appears in the array before any 4.

// Examples

// fix34([1, 3, 1, 4]) → 1,3,4,1
// fix34([1, 3, 1, 4, 4, 3, 1]) → 1,3,4,1,1,3,4
// fix34([3, 2, 2, 4]) → 3,4,2,2
// fix34([3, 2, 2, 4]) → 3,4,2,2
function fix34(nums){
  let newArr=[]  
  let swapQueue=[] 
  let queueFours=[]
  for(let i=0;i<nums.length;i++){
   
  //  fix34([3, 1, 1, 3, 4, 4]) → 3,4,1,3,4,1
    if(nums[i]===3 && nums[i+1]!==4){

      // if weve already seen an unswapped 4 that is now is fourQueue
        if(queueFours.length>0){
          nums[queueFours[0]]=nums[i+1]
          nums[i+1]=4
          queueFours.shift()
        }
      else swapQueue.push(i+1)   
    }

    if(nums[i]===3 && nums[i+1]===4){
      i++; 
      continue
    }

    if(nums[i]===4 && swapQueue.length!==0){

      //first replace the 4 with the value at nums[swapQueue[0]] 
        nums[i]=nums[swapQueue[0]];
      //then replace the  value at nums[swapQueue[0]] with 4
        nums[swapQueue[0]] = 4;
      //finally, remove the first value in the swapQueue
      swapQueue.shift()
      // console.log(nums)
    }
    if(nums[i]===4){
      queueFours.push(i)
    }
 }
  return nums
}

console.log(fix34(([1, 3, 1, 4]))) //1,3,4,1
console.log(fix34(fix34([3, 2, 3, 2, 4, 4])))// → 3,4,3,4,2,2
console.log(fix34([3, 1, 1, 3, 4, 4]))// → 3,4,1,3,4,1

// logic...
// fix34([1, 3, 1, 4]) //1,3,4,1
// fix34([1, 3, 1, 4, 4, 3, 1]) //1,3,4,1,1,3,4
//                       // |   
// [1,3,4,1]
//          |

// [3, 4, 3, 4, 2, 2]
                  // |

      // if the value after 3 is not a 4, add the index to the back of the queue
    //  let swapQueue = [];
     //swap 4 with value of indexFollowingThree


     // queue

    //  [3,4,3,4]
