// Array-2 -- tenRun
// For each multiple of 10 in the given array, change all the values following it to be that multiple of 10, until encountering another multiple of 10. So {2, 10, 3, 4, 20, 5} yields {2, 10, 10, 10, 20, 20}.

// Examples

// tenRun([2, 10, 3, 4, 20, 5]) → 2,10,10,10,20,20
// tenRun([10, 1, 20, 2]) → 10,10,20,20
// tenRun([10, 1, 9, 20]) → 10,10,10,20

function tenRun(nums){
 
  //loop through array
  //find values multiple of 10
      //---if the num is divisible by 10=1 is 10, if by 20 is 2...add a zero after 
      //---replace all the numbers that are not divisible by 10
            //by that val plus 0 at end
      //---if the num is not 1 where 1+"0" then replace by that new num+"0"

console.log(tenRun([2, 10, 3, 4, 20, 5])) //2,10,10,10,20,20