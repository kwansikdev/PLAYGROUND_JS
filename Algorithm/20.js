// 20. 배열의 첫 요소와 마지막 요소로 배열 만들기

function generateRange(from, to) {
  const res = [];

  for(let i = from; i <= to; i++) {
    res.push(i);
  }
  return res;
}

console.log(generateRange(10, 15)); // [ 10, 11, 12, 13, 14, 15 ]