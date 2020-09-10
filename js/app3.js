
// 課題１−３
const output = tasks => {
  console.log('========================');
  console.log('現在持っているタスク');
  console.log('========================');
  tasks.forEach((task, index) => {
    console.log(`${index} : ${task}`);
  });
}

let tasks = ['掃除', '買い物', '散歩'];
output(tasks)

while (tasks) {
  tasks.push(prompt('タスクを入力してください'));
  alert('タスクを追加しました');
  output(tasks);
}
