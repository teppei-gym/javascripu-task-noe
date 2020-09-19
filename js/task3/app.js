const addBtn = document.getElementById('add-task-btn');
let maxTaskId = 0;
const table = document.getElementById('task-table');
const deleteBtn = document.getElementById('delete-btn')
const task = document.getElementById('task-text');

addBtn.addEventListener('click', function () {
  const taskVal = task.value;
  if (!taskVal) return;

  output(taskVal, table);
  task.value = '';
});

function output(task, table) {
  let tr = document.createElement('tr');

  tr.appendChild(createTd('td', ++maxTaskId, 'task-id'));
  tr.appendChild(createTd('td', task));
  tr.appendChild(createTd('button', '作業中'));
  tr.appendChild(createTd('button', '削除'));

  table.lastElementChild.appendChild(tr);
}

function deleteTask(e) {
  e.target.parentNode.remove();
  const idElements = document.querySelectorAll('.task-id');
  maxTaskId = 0;
  for (let el of [...idElements]) {
    el.textContent = ++maxTaskId;
  }
}

function changeStatus(e) {
  e.target.textContent = e.target.textContent === '作業中' ? '完了' : '作業中';
}

function createTd(tagName, value, classNanme = null) {
  const el = document.createElement(tagName);
  if (classNanme) {
    el.classList.add(classNanme);
  }

  if (value === '削除') {
    el.addEventListener('click', deleteTask)
  }

  if (value === '作業中') {
    el.addEventListener('click', changeStatus);
  }

  el.textContent = value;

  return el;
}
