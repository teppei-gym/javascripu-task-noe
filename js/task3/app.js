const addBtn = document.getElementById('add-task-btn');
let maxTaskId = 0;
const table = document.getElementById('task-table');
const deleteBtn = document.getElementById('delete-btn')
const task = document.getElementById('task-text');

addBtn.addEventListener('click', function () {
  const taskVal = task.value;
  if (taskVal === "") return;

  output(taskVal, table);
  task.value = "";
});

function output(task, table) {
  const tr = document.createElement('tr');

  const appendTr = (tagName, value, classNanme = null) => {
    const el = document.createElement(tagName);
    if (classNanme !== null) {
      el.classList.add(classNanme);
    }
    if (value === '削除') {
      el.addEventListener('click', function (e) {
        e.target.parentNode.remove();
        const idElements = document.querySelectorAll('.task-id');
        maxTaskId = 0;
        for (let el of [...idElements]) {
          el.textContent = ++maxTaskId;
        }
      })
    }
    el.textContent = value;
    tr.appendChild(el);
  };

  appendTr('td', ++maxTaskId, 'task-id');
  appendTr('td', task);
  appendTr('button', '作業中');
  appendTr('button', '削除');

  table.lastElementChild.appendChild(tr);
}
