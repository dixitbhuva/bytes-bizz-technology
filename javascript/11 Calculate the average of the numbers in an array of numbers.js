let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let sum = 0;
console.log(`Array is: ${numbers}`);

for (let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
}
let average = sum / numbers.length;
console.log(`Average of the numbers in the array is: ${average}`);
