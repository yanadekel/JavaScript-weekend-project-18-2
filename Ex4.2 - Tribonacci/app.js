let tribonacci = ([x, y, z], n) => {
  let tribonacciArr = [x, y, z];

  if (n === 0) {
    return tribonacciArr = [];
  } else {
    for (let i = 3; i < n; i++) {
      tribonacciArr.push(tribonacciArr[i - 1] + tribonacciArr[i - 2] + tribonacciArr[i - 3]);
    }
  }
  return tribonacciArr;
}

console.log(tribonacci([3, 6, 1], 0));
