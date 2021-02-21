// Ex5.3 - To Camel Case
// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).

let capitalize = (str) => {
  let [first, ...others] = str.split("");
    return [first.toUpperCase(), ...others].join("");
};


let converts = (str) => {
  return str.split("-")
    .map((j, i) => {
      if (i!== 0) {
        return capitalize(j);
      } else {
        return j;
      }
    })
    .join("");
   
}

console.log(converts('yana-dekel'));
console.log(converts('Shai-dekel'));








