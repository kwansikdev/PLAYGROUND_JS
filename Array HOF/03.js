// 3. 프로퍼티 정렬

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];


function sortBy(key) {
  // const results = todos.map(todo => todo);
  // const results = todos.slice();
  const results = [...todos];
  // 음수가 나오느냐 양수가 나오느냐 0이냐 를 보고 정렬을 한다.
  results.sort((a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
  return results;
}

console.log(sortBy('id'));
console.log(sortBy('content'));
console.log(sortBy('completed'));