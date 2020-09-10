
// 課題１−２
let result = prompt('日本の首都は？');

console.log(result)

while (result !== '東京') {
  alert('不正解です');
  result = prompt('日本の首都は？')
}

alert('正解です');
