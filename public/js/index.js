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
const render = (data) => {
  todos = data;
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

const ajax = (() => {
  const req = (method, url, f,  payload) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(JSON.stringify(payload));

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        f(JSON.parse(xhr.response));
      } else {
        throw new Error(xhr.status);
      }
    }
  };

  return {
    get(url, f) {
      req('GET', url, f)
    },
    post(url, f, payload) {
      req('POST', url, f, payload)
    },
    patch(url, f, payload) {
      req('PATCH', url, f, payload)
    },
    put(url, f, payload) {
      req('PUT', url, f, payload)
    },
    del(url, f) {
      req('DELETE', url, f)
    }
  };

})();

const generateId = () => {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}

//
const getTodos = () => {
  ajax.get('/todos', render);
};

const addTodo = (content) => {
  ajax.post('/todos', render, {id: generateId(), content, completed: false});
}

const toggleCheckbox = (id, completed) => {
  ajax.patch(`/todos/${id}`, render, {completed});
}

const removeTodo = (id) => {
  ajax.del(`/todos/${id}`, render);
}

const completeAll = (completed) => {
  ajax.put(`/todos`, render, {completed});
}

const clearCompletedAll = (completed) => {
  ajax.del(`/todos/complete/${completed}`, render);
}

const toggleNav = () => {
  ajax.get('/todos/toggle', render);
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

  console.log(target);
  [...$toggleNav.children].forEach($navItem => {
    $navItem.classList.toggle('active', $navItem === target);
  });

  navState = target.id;

  toggleNav();
};