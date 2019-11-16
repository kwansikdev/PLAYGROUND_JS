// 27. 요일 구하기

function getDayName(a, b){
  let month = a + '';
  let day = b + '';
  const week = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'];

  if (month.length < 2) {
    month = `0${month}`;
  }

  if (day.length < 2) {
    day = `0${day}`;
  }

  const answer = week[new Date(`2016-${month}-${day}`).getDay()];

  return answer;
}

console.log(getDayName(5, 24)); // TUE