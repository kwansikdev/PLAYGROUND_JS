// 14. 중복된 요소

function findDuplicated(array) {
  let result = [];
  array.filter((arr, i) => {
    if(array.indexOf(arr) !== i) {
      result.push(arr);
    }
  })
  return result;

}

console.log(findDuplicated([1, 2, 3, 4, 1, 2, 3])); // [ 1, 2, 3 ]