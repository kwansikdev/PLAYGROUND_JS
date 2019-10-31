// 5. 이상한 문자 만들기

// 공백을 기준으로 나누어서 배열에 담은 다음
// for문으로 배열의 인덱스로 각각의 문자열을 받아와서
// 그 안에 for문으로 각 문자열의 인덱스를 가지고 대문자 소문자로 변경한 다음
// 다시 for문으로 공백을 넣어서 새로운 문자열(배열)로 반환
function toWeirdCase(s) {
  let sArr = s.split(' ');
  let result = '';

  for(let i = 0; i < sArr.length; i++) {
    for (let j = 0; j <sArr[i].length; j++) {
      if (j % 2) {
        result += sArr[i][j].toLowerCase();
      } else {
        result += sArr[i][j].toUpperCase();
      }
    }
    result += ' ';
  }
  return result;
}

console.log(toWeirdCase('hello world'));    // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'