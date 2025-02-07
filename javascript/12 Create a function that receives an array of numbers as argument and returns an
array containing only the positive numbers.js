let numbers = [1, 2, 3, -1, -2, -3];
console.log(`The array is: `, numbers);

function positiveNumbers(numbers) {
  let positiveNumbers = [];
  for( let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) {
      positiveNumbers.push(numbers[i]);
    }
  }
  return positiveNumbers;
}

console.log(`Return Value:`, positiveNumbers(numbers));
