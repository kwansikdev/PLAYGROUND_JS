// 21. 두 정수 사이의 합

function adder(x, y){
  if (x === y) return x;

  let answer = 0;

  if(x > y) {
    for (let i = y; i <= x; i++) {
      answer += i;
    }
  } else if (x < y) {
    for (let i = x; i <= y; i++) {
      answer += i;
    }
  } else return x;

  return answer;
}

console.log(adder(3, 5)); // 12