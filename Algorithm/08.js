// 8. 수박수박수박수박수박수?

function waterMelon(n) {
  let result = '';

  for(let i = 0; i < n; i++) {
    result += i % 2 === 0 ? '수' : '박';
  }
  return result;
}

console.log('n이 3인 경우: '+ waterMelon(3));
console.log('n이 4인 경우: '+ waterMelon(4));