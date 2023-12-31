'use strict;'

function sum(a, b) {
  return a + b;
}


function sumAll(...params) {
  let result = 0;
  for (p of params) {
    result += p
  }
  return result
}

// console.log(`sum:    ${sum(3, 5)}`);
// console.log(`sumAll: ${sumAll(3, 2, 4, 6, 10)}`);

function formSum(input1, input2, output) {
  const num1   = parseInt(document.getElementById(input1).value)
  const num2   = parseInt(document.getElementById(input2).value)

  document.getElementById(output).value = sum(num1, num2)
}
