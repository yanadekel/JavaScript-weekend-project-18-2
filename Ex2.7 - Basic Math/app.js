// Your task is to create a function that does four basic .
// The function should take three arguments - operation(string/char), value1(number),
// value2(number).
// The function should return result of numbers after applying the chosen operation.

let matematic = (char, num1, num2) => {
  let calc = 0;
  if (char === '-') {
    return calc.push = num1 - num2;
  } else if (char === '+') {
    calc = num1 + num2;
  } else if (char === '/') {
    calc = num1 / num2;
  } else if (char === '*') {
    calc = num1 * num2;
  } else {
    return 'not valid';
  }
  return calc;
}



console.log(matematic('!', 2, 3));
console.log(matematic('3', 2, 3));
console.log(matematic('+', 2, 3));
