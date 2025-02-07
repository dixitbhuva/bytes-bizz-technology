function fibonacci(n) {
  let a = 0;
  let b = 1;
  let c = 0;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(a);
    c = a + b;
    a = b;
    b = c;
  }
  return arr;
}
console.log(`First 10 Fibonacci numbers: ${fibonacci(10)}`);
