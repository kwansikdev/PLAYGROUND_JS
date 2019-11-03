// 13. 중복없는 배열

function isNotOverlapArray(array) {
  let resutl = []
  array.sort((a,b) => a - b);
  for(let i = 0; i < array.length - 1; i++) {
    if(array[i+1] - array[i] === 1) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(isNotOverlapArray([4, 1, 3, 2])); // true
console.log(isNotOverlapArray([4, 1, 3]));    // false