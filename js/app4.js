// 課題１−４
const output = tasks => {
  console.log('========================');
  console.log('現在持っているタスク');
  console.log('========================');
  tasks.forEach(({ content, genre }, index) => {
    console.log(`${index} : [内容] ${content} [ジャンル] ${genre}`);
  });
}

let tasks = [
  {
    content: '机を片付ける',
    genre: '掃除'
  },
  {
    content: '牛乳を買う',
    genre: '買い物'
  },
  {
    content: '散歩する',
    genre: '運動'
  }
];
console.log()
output(tasks)

while (tasks) {
  const obj = {}
  obj.content = prompt('タスクを入力してください');
  obj.genre = prompt('ジャンルを入力してください');

  tasks.push(obj);
  alert('タスクを追加しました');
  output(tasks);
}