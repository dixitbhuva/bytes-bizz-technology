function fibonacci(n) {
  if (n <= 1){
    return n;
  }
  return (fibonacci(n - 1) + fibonacci(n - 2));
}
console.log(`Fibonacci number is 10: ${fibonacci(10)}`);
