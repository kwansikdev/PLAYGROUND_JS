// 19. 하샤드 수

function isHarshad(n){
  if(n <= 0) return;
  const strNum = (n + '').split('');
  const sum = strNum.reduce((pre, cur) => (pre *= 1) + (cur *= 1), 0);

  if(n % sum) return false;
  return true;
}

console.log(isHarshad(10)); // true
console.log(isHarshad(12)); // true
console.log(isHarshad(18)); // true
console.log(isHarshad(11)); // false
console.log(isHarshad(13)); // false