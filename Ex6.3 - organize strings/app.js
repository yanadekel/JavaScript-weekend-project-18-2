// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
// longest possible, containing distinct letters,


let sets=(str1,str2)=>{
  let conc=str1.concat(str2).toLowerCase().split('').sort();
  let newArr= [...new Set(conc)];
  return newArr;
}

console.log(sets('sdfffe', 'abbfe'));