let a = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let sum = 0;
console.log(`Array is: ${a}`);

for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
}
console.log(`Sum of numbers in the array is: ${sum}`);
