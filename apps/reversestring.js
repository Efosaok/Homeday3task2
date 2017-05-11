
const reverseString = (str)=>{
//check if string is null
  if (str === ""){
  	return null
  }
//initialize our variable to hold the reverse of str
  let reverseOfString = ""
  for(let i = str.length-1;i >= 0;i--){
    reverseOfString += str[i]
  }
//before returning we check if the string is palindromelike
  if (reverseOfString === str){
    return true
  }
  return reverseOfString
}

exports.reverseString = reverseString