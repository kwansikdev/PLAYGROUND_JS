// 11. 삼각형 출력하기 - pattern 1

var line = 5;
var star = '';

for (var i = 0; i < line; i++) {
  for (var j = 0; j <= i; j++) {
    star += '*';
  }
  star += '\n';
}

console.log(star);
