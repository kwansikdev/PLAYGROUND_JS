// 16. 역정삼각형 출력하기

let line = 5;
let star = '';

for (let i = line - 1; i >= 0; i--) {
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
