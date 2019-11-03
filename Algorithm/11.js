// 11. Check Palindrom

function checkPalindrom(str) {
  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[str.length - 1 - i]) {
      return true;
    }
    return false;
  }
}

console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // true