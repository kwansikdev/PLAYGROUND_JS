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

const render = () => {
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

const getTodos = async() => {
    try {
      todos = await axios.get('/todos')
        .then(res => todos = res.data);
      render();
    } catch(e) {
      //
    }
  }

const addTodo = async(content) => {
  try {
    todos = await axios.post(`/todos`,{id: generateId(), content, completed: false})
      .then(res => todos = res.data)
    render();
  } catch(e) {

  }
}

const toggleCheckbox = async(id, completed) => {
  try {
    todos = await axios.patch(`/todos/${id}`,{completed})
      .then(res => todos = res.data)
    render();
  } catch(e) {

  }
}

const removeTodo = async(id) => {
  try {
    todos = await axios.delete(`/todos/${id}`)
      .then(res => todos = res.data)
    render();
  } catch(e) {

  }
}

const completeAll = async(completed) => {
  try {
    todos = await axios.put(`/todos`, {completed})
      .then(res => todos = res.data)
    render();
  } catch(e) {

  }
}

const clearCompletedAll = async(completed) => {
  try {
    todos = await axios.delete(`/todos/complete/${completed}`)
      .then(res => todos = res.data)
    render();
  } catch(e) {

  }
}

const toggleNav = async() => {
  try {
    todos = await axios.get(`/todos/toggle`)
      .then(res => todos = res.data)
    render();
  } catch(e) {

  }
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
