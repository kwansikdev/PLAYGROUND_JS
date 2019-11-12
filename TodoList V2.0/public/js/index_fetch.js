let todos = [];
let navState = 'all';

// DOMs
const $todos = document.querySelector('.todos');
const $input = document.querySelector('.input-todo');
const $completeAll = document.querySelector('#ck-complete-all');
const $clearCompletedAll = document.querySelector('.clear-completed > .btn');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
const $toggleNav = document.querySelector('.nav');

// f: render
const render = () => {
  // todos = data
  const _todos = todos.filter(({ completed }) => (navState === 'all' ? true : navState === 'active' ? !completed : completed));

  let html = '';
  _todos.forEach(({id, content, completed}) => {
    html += `
      <li id="${id}" class="todo-item">
        <input class="checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
        <label for="ck-${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>
    `;
  });

  $todos.innerHTML = html;
  $completedTodos.textContent = todos.filter(todo => todo.completed).length;
  $activeTodos.textContent = todos.filter(todo => !todo.completed).length;
};

const generateId = () => {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}

//
const getTodos = () => {
  fetch('/todos')
    .then(res => res.json())
    .then(res => todos = res)
    .then(render)
    .catch(err => console.error(err));
};

const addTodo = (content) => {
  fetch('/todos', {
    method: 'POST',
    headers : {'content-type': 'application/json'},
    body: JSON.stringify({id: generateId(), content, completed: false})
  })
    .then(res => res.json())
    .then(res => todos = res)
    .then(render)
    .catch(err => console.log(err));
}

const toggleCheckbox = (id, completed) => {
  fetch(`/todos/${id}`, {
    method: 'PATCH',
    headers: {'content-type': 'application/json'},
    body : JSON.stringify({completed})
  })
    .then(res => res.json())
    .then(res => todos = res)
    .then(render)
    .catch(err => console.log(err));
}

const removeTodo = (id) => {
  fetch(`/todos/${id}`, {
    method: 'DELETE',
  })
    .then(res => res.json())
    .then(res => todos = res)
    .then(render)
    .catch(err => console.log(err));
}

const completeAll = (completed) => {
  fetch(`/todos`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body : JSON.stringify({completed})
  })
    .then(res => res.json())
    .then(res => todos = res)
    .then(render)
    .catch(err => console.log(err));
}

const clearCompletedAll = (completed) => {
  fetch(`/todos/complete/${completed}`, {
    method: 'DELETE',
  })
    .then(res => res.json())
    .then(res => todos = res)
    .then(render)
    .catch(err => console.log(err));

}

const toggleNav = () => {
  fetch('/todos/toggle')
    .then(res => res.json())
    .then(res => todos = res)
    .then(render)
    .catch(err => console.error(err));
}

//  Event
//
window.onload = getTodos;

// addTodo
$input.onkeyup = ({target, keyCode}) => {
  const content = $input.value.trim();
  if(!content || keyCode !== 13) return;
  target.value = '';

  addTodo(content);
};

// checkbox toggle
$todos.onchange = ({target}) => {
  const id = target.parentNode.id;
  const completed = !todos.find(todo => todo.id === +id).completed;

  toggleCheckbox(id, completed);
};

// removerTodo
$todos.onclick = ({target}) => {
  if(!target.classList.contains('remove-todo')) return;
  const id = target.parentNode.id;

  removeTodo(id);
};

// All completed false => true
$completeAll.onchange = ({target}) => {
  const completed = target.checked;

  completeAll(completed);
};

// All remove completed
$clearCompletedAll.onclick = ({target}) => {
  const completed = true;

  clearCompletedAll(completed);
};

// toggleNav
$toggleNav.onclick = ({target}) => {
  if(target.classList.contains('nav')) return;

  [...$toggleNav.children].forEach($navItem => {
    $navItem.classList.toggle('active', $navItem === target);
  });

  navState = target.id;

  toggleNav();
};