function primenumber(number){
  if(number < 2){
    return false;
  }
  for(var i = 2; i < number; i++){
    if(number % i === 0){
      return false;
    }
  }
  return true;
}
console.log(`does 16 is prime number : ${primenumber(16)}`); // false
console.log(`does 7 is prime number : ${primenumber(7)}`); // true
