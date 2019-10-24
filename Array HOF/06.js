//  6. 특정 요소의 프로퍼티 값 반전

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

console.log(todos[1].completed);


function toggleCompletedById(id) {
  const boolrev = todos.filter(todo => todo.id === id);
  boolrev[0].completed = !boolrev[0].completed;
}

toggleCompletedById(2);

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/