// 23. 배열에서 특정 값만을 구하기

function getArray(arr) {
  let result = [];

  arr.filter(arr => {
    if(arr % 2 === 0 && arr > 3) result.push(arr);
  })

  return result;
}

console.log(getArray([1, 2, 3, 4, 5, 6])); // [ 4, 6 ]