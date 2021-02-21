// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
////////////////////////////////////////////////////////////////////////////////////////////


let strSort=(str)=>{
  let x = str.split(' ').sort( (a, b) =>a.length-b.length);
  return x[0].length;
}



console.log(strSort('yana and shai forever'));
