
/* Export your NodeJS module from this file */
const isPalindrome = (str) =>{
  
  if  (typeof(str) !== 'string')  throw {error  : "input must be wrapped into ' ' "};  
  
  var re = /[\W_]/g; //  var re = /[^A-Za-z0-9]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');

  if (str==="")  return false
  return reverseStr === lowRegStr; 
}
