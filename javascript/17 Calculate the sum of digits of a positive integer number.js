number = 123;
answer = 0;
while (number > 0) {
  answer = answer + (number % 10);
  number = number / 10;
}
console.log(`The sum of digits of the number 123 is ${Math.floor(answer)}`);
