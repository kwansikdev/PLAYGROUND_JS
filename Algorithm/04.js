// 4. 문자열 내 p와 y의 개수

function numPY(s) {
  let countP = 0;
  let countY = 0;

  if (s === undefined) return true;
  const numArr = s.split('');

  for (let i = 0; i < numArr.length; i++){
    if (numArr[i] === 'P' || numArr[i] === 'p') {
      countP += 1;
    } else if (numArr[i] === 'Y' || numArr[i] === 'y') {
      countY += 1;
    }
  }

  if (countY === countP) return true;
  return false;
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy'));     // false
console.log(numPY('ab'));      // true
console.log(numPY(''));        // true
console.log(numPY());          // true