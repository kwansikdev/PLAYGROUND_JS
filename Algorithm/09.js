// 9. 정수제곱근 판별하기

function nextSqaure(n){
  let x = Math.sqrt(n);

  if(Number.isInteger(x)) return (x+1)**2;
  return 'no';
}

console.log(nextSqaure());    // no
console.log(nextSqaure(0));   // 1
console.log(nextSqaure(1));   // 4
console.log(nextSqaure(2));   // no
console.log(nextSqaure(3));   // no
console.log(nextSqaure(121)); // 144
console.log(nextSqaure(165)); // no
console.log(nextSqaure(400)); // 441