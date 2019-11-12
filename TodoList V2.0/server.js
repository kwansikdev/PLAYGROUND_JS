const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 데이터베이스
let todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];
todos.sort((todo1, todo2) => todo2.id - todo1.id);

//
app.get('/', (req, res) => {
  res.send();
})

app.get('/todos', (req, res) => {
  res.send(todos);
})

app.get('/todos/toggle', (req, res) => {
  res.send(todos);
})

app.post('/todos', (req, res) => {
  todos = [req.body, ...todos];
  res.send(todos);
})

app.patch('/todos/:id', (req,res) => {
  const id = req.params.id;
  const completed = req.body.completed;
  todos = todos.map(todo => todo.id === +id ? {...todo, completed: completed} : todo);
  res.send(todos);
});

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  todos = todos.filter(todo => todo.id !== +id);
  res.send(todos);
});

app.delete('/todos/complete/:true', (req, res) => {
  todos = todos.filter(todo => !todo.completed);
  res.send(todos);
});

app.put('/todos', (req, res) => {
  const completed = req.body.completed;
  todos = todos.map(todo =>  ({...todo, completed}));
  res.send(todos)
});

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
})