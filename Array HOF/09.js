// 9. id 프로퍼티의 값 중에서 최대값 구하기

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getMaxId() {
  return Math.max(...todos.map(todo => todo.id));
  // return Math.max.apply(null, todos.map(todo => todo.id));
  // return Math.max.call(null, ...todos.map(todo => todo.id));

}

console.log(getMaxId()); // 3