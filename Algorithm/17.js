// 17. 피보나치 수

function fibonacci(n) {
  if(n < 2) return n;

  let f1 = 0;
  let f2 = 1;
  let newF = 0;

  for(let i = 1; i <= n; i++) {
    f1 = f2;
    f2 = f2 + newF;
    newF = f1;
  }
  return newF;
}

console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8