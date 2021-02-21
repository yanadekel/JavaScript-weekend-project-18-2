// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H




let toWeirdCase = (str) => {
  return str.split(" ").map((j) =>j.split('')[0].toUpperCase()).join('.');

}


console.log(toWeirdCase('Yana dekel'));