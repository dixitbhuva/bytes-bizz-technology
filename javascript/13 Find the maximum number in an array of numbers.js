let numbers = [100, 23, 45, 67, 89, 12, 34, 56, 78, 90];
let max = numbers[0];
console.log(`The numbers are ${numbers}`);
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > max){
        max = numbers[i];
    }
}
console.log(`The maximum number is ${max}`);
