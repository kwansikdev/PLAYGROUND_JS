// 10. 배열의 최대/최소값 구하기

function getMaxValueFromArray(array) {
  const result = Math.max(...array);
  return result;
}
console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7

function getMinValueFromArray(array) {
  const result = Math.min(...array);
  return result;
}
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5