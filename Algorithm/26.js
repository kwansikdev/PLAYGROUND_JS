//  26. 특별한 정렬

function specialSort(array) {
  let posNumArr = [];
  let negNumArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      posNumArr.push(array[i]);
    } else {
      negNumArr.push(array[i]);
    }
  }
  return negNumArr.sort().concat(posNumArr.sort());
}

const testArray = [-1, 1, 3, -2, 2, 0];

console.log(testArray); // [ -1, 1, 3, -2, 2, 0 ]
console.log(specialSort(testArray)); // [ -1, -2, 0, 1, 2, 3 ]