// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and
// numeric digits that occur more than once in the input string. The input string can be assumed to
// contain only alphabets (both uppercase and lowercase) and numeric digits.



let Duplicates=(str)=>{
  let strArr= str.toLowerCase().split('').sort();
  let counter=0;
  for (let i=0; i<strArr.length;i++){
    if (strArr[i]==strArr[i+1]&& strArr[i-1]!=strArr[i]){
      counter++;
    }
  }
  return counter;
}

console.log(Duplicates('aaAbCccdE'));