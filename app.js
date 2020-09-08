// 課題１−１
// for (let i = 1; i < 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`FizzBuzz${i}`);
//   } else if (i % 5 === 0) {
//     console.log(`Buzz ${i}`);
//   } else if (i % 3 === 0) {
//     console.log(`Fizz ${i}`);
//   }
// }

// 課題１−２
let result = prompt('日本の首都は？');

console.log(result)

while (result !== '東京') {
  alert('不正解です');
  result = prompt('日本の首都は？')
}

alert('正解です');
