//15. 약수의 합

function sumDivisor(num) {
  let sum = 0;
  for(let i = 1; i <= num; i++) {
    if(num % i === 0) sum += i;
  }
  return sum;
}

console.log(sumDivisor(12)); // 28