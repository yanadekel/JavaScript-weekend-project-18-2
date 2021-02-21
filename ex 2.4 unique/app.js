// Ex2.4 - Unique
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.


let someNum = (arrey) => {
  newArr = arrey.sort((a, b) => {
    return a - b;
  });

  if (newArr[0] < arrey[1]) {
    return newArr[0];
  } else {
    return newArr[newArr.length - 1];
  }
}


console.log(someNum([5, 5, 7, 5, 5]));
