const fizz = document.getElementById('fizz');
const buzz = document.getElementById('buzz');
const runBtn = document.getElementById('run-btn');
const wrap = document.getElementById('wrap');

runBtn.addEventListener('click', function () {
  while ((el = wrap.firstChild)) {
    wrap.removeChild(el);
  }

  const initFizz = Number(fizz.value);
  const initBuzz = Number(buzz.value);

  if (typeof initFizz !== 'number' || typeof initBuzz !== 'number') {
    console.error('数字を入力してください');
    return;
  }

  let result = [];

  let fizzNum = 0;
  for (let i = 0; fizzNum < 100; i++) {
    fizzNum = initFizz * i;
    if (fizzNum < 100) result.push(fizzNum);
  }

  let buzzNum = 0;
  for (let i = 0; buzzNum < 100; i++) {
    buzzNum = initBuzz * i;
    if (buzzNum < 100) result.push(buzzNum);
  }

  result.sort((a, b) => {
    return a - b;
  })

  multiple = new Set(result);
  multiple.delete(0);

  for (num of multiple) {
    output(num, initFizz, initBuzz);
  }
});

function output(num, initFizz, initBuzz) {
  prefix = '';

  if (num % initFizz === 0 && num % initBuzz === 0) {
    prefix = 'FizzBuzz';
  } else if (num % initFizz === 0) {
    prefix = 'Fizz';
  } else {
    prefix = "Buzz";
  }

  const el = document.createElement('div');
  el.textContent = `${prefix} ${num}`;
  wrap.appendChild(el);
}
