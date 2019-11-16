// 25. 최단 거리 1차원 점의 쌍 구하기 (DAUM)

// for문으로 각 요소를 선택해서 배열로 만드는데
// 만들때 차이 값을 비교해
function findMinDistance(array){
  const TEMP = [];
  const ANSWER = [];

  for (let i = 1; i < array.length; i++) {
    TEMP.push(array[i] - array[i - 1]);
  }

  for (let i = 0; i < TEMP.length; i++) {
    if (TEMP[i] == Math.min.apply(0, TEMP)) {
      ANSWER.push([array[i], array[i + 1]]);
    }
  }
  return ANSWER;
}

// 1차원 점의 배열
var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]