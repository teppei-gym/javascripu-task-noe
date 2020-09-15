const addBtn = document.getElementById('add-task-btn');
let maxTaskId = 0;
const table = document.getElementById('task-table');

addBtn.addEventListener('click', function () {
  const task = document.getElementById('task-text');

  output(task.value, table);
  task.value = "";
});

function output(task, table) {
  const tr = document.createElement('tr');
  const id = document.createElement('td');
  const td = document.createElement('td');

  const appendTr = (tagName, value) => {
    const el = document.createElement(tagName);
    el.textContent = value;
    tr.appendChild(el);
  };

  appendTr('td', ++maxTaskId);
  appendTr('td', task);
  appendTr('button', '作業中');
  appendTr('button', '削除');


  tr.appendChild(td);
  table.lastElementChild.appendChild(tr);
}
