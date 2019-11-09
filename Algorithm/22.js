// 22. 배열의 인접한 요소곱 중 가장 큰 값 구하기

function adjacentElementsProduct(arr) {
  let mulArr = [];
  for(let i = 0; i < arr.length - 1; i++) {
    mulArr.push(arr[i]*arr[i+1]);
  }

  return Math.max(...mulArr);
};

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
