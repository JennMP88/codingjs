// Logic-1 -- inOrder
// Given three ints, a b c, return true if b is greater than a, and c is greater than b. 
//However, with the exception that if "bOk" is true, b does not need to be greater than a.

// Examples

// inOrder(1, 2, 4, false) → true
// inOrder(1, 2, 1, false) → false
// inOrder(1, 1, 2, true) → true

function inOrder(a, b, c, bOk){

  if (bOk) {
    return c > b;
  }
  return b > a && c > b;
  // if(a<b<c && bOk===false){
  //   if(a>b && b<c && bOk===false){return false}
  //   return true
  // }
  // if(a<b && a===c && bOk==false){return false}

  // if(a===b && b<c && bOk===true){return true}
  // if(a>b && b<c && bOk===true){return true}
  // if(a<b && b<c && bOk===true){return true}
  
  // if(a<b && b>c && bOk===true){return false}
  // if(a>b && b>c &&bOk===true){return false}
  // if(a>b && b===c && bOk===true){return false}
   

}
console.log(inOrder(1, 2, 4, false)) //true
console.log(inOrder(1, 2, 1, false)) //false
console.log(inOrder(1, 1, 2, true)) //true