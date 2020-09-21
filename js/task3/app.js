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

const radios = document.getElementsByName('task-status');

for (let radio of [...radios]) {
  radio.addEventListener('change', displayByStatus);
}

function output(task, table) {
  let tr = document.createElement('tr');

  tr.appendChild(createTd('td', ++maxTaskId, 'task-id'));
  tr.appendChild(createTd('td', task));
  tr.appendChild(createTd('button', '作業中'));
  tr.appendChild(createTd('button', '削除'));

  for (let radio of [...radios]) {
    if (radio.value === '完了' && radio.checked) {
      tr.style.display = 'none';
    }
  }
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
  const el = e.target;
  el.textContent = e.target.textContent === '作業中' ? '完了' : '作業中';
  for (let radio of [...radios]) {
    if (radio.value !== 'all' && radio.checked) {
      el.parentNode.style.display = 'none';
    }
  }
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
    el.classList.add('target-td');
    el.addEventListener('click', changeStatus);
  }

  el.textContent = value;

  return el;
}

function displayByStatus(e) {
  const td = document.querySelectorAll('.target-td');

  const status = e.target.value;
  for (let target of [...td]) {
    target.parentNode.style.display = 'table-row';

    if (status === 'all') continue;

    if (target.textContent !== status) {
      target.parentNode.style.display = 'none';
    }
  }
}