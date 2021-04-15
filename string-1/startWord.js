// Given a string and a second "word" string, we'll say that the word matches the string if it appears at the front of the string,
// except its first char does not need to match exactly. On a match, return the front of the string, or otherwise return the empty string. 
//So, so with the string "hippo" the word "hi" returns "hi" and "xip" returns "hip". 
//The word will be at least length 1.

// Examples

// startWord('hippo', 'hi') → hi
// startWord('hippo', 'xip') → hip
// startWord('hippo', 'i') → h

function startWord(str, word){
  if(word.length>=2){
    first=word.indexOf(word[0])
    console.log(first,"1")
    last=word.length
    console.log(last,"2")
    last2=str.substr(first,last)
    console.log(last2,"3")
    return last2
  }
    else if (word<=1){
      let secondWord=word.indexOf(word)
      return str.substr(secondWord) 
    }
}
console.log(startWord('hippo', 'hi'))//hi
console.log(startWord('hippo', 'xip'))//hip
console.log(startWord('hippo', 'i'))//h