// 12. 중복 요소 제거

function uniq(array) {
  let result = [];
  array.filter((arr, i) => {
    if(array.indexOf(arr) === i) {
      result.push(arr);
    }
  });
  return result;
}

console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]