// 15. 정삼각형 출력하기

let line = 5;
let star = '';

for (let i = 0; i < line; i++) {
  for (let j = 0; j < line * 2 - 1; j++) {
     if (j >= 4 - i && j <= i + 4 ) {
       star += '*';
     } else {
       star += ' ';
     }
  }
  star += '\n';
}

console.log(star);
