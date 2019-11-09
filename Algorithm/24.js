// 24. 평균구하기

function average(array){
  return array.reduce((pre, cur) => pre + cur, 0) / array.length;
}

console.log(average([5, 3, 4])); // 4