// This time no story, no theory. The examples below show you how to write function
// accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
/////////////////////////////////////////////////////////////////////////////////////


let mambling = (str) => {
  let x = str.split('');
  for (let i = 0; i < x.length; i++) {
    x[i] = x[i].toUpperCase()+x[i].repeat(i);
  }
  return x.join('-');
}


console.log(mambling('abcd'));