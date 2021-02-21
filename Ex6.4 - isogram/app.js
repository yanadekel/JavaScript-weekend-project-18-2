// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.


let comper=(str)=>{
  let x=str.toLowerCase().split('');
  let newArr= [... new Set(x)];
  if (x.length===newArr.length){
    return true;
  }else {
    return false;
  }
}


console.log(comper('abcdefg'));