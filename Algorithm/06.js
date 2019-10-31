// 6. 핸드폰번호 가리기

// 입력받은 문자열을 Spread 문법으로 풀어서 배열에 저장
// fill 메소드를 이용해서 배열의 길이의 -4까지의 문자열을 *로 치환
// 그리고 join 메소드로 문자열로 변환 후 반환

function hideNumbers(str) {
  let strArr = [...str]
  const result = strArr.fill('*', 0, strArr.length - 4).join('');

  return result
}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888'));   // *****8888