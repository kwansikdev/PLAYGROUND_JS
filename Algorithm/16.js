// 16. 소수 찾기

function numberOfPrime(n) {
  let result = 0;
  let count = 0;
  for (let i = 2; i <= n; i++) {
    count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        count++;
      }
    }
    if (count == 2) {
      result++;
    }
  }
  return result;
}

console.log(numberOfPrime()); // 4