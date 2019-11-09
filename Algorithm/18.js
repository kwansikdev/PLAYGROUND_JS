// 18. 각 자릿수의 합 구하기

function digitSum(n) {
  if(n > 100000000) return false;
  const str = (n + '').split('');
  const result = str.reduce((pre, cur) => (pre *= 1) + (cur *= 1), 0);

  return result;
}

console.log(digitSum(123));  // 6
console.log(digitSum(987));  // 24
console.log(digitSum(100000001));  // false