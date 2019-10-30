// 2. 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기

function getCount8 () {
  let count = 0;
  for(let i = 1; i <= 10000; i++) {
    // i를 문자열로 변환후 split 메소드로 8로 구분해서 배열에 담고 배열의 길이에서 -1 하면 그 숫자에서의 8의 갯수를 알 수 있다.
    count += ((i + '').split(/8/g)).length - 1;
  }
  return count;
}

console.log(getCount8()); // 4000