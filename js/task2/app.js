'use strict';

const fizz = document.getElementById('fizz');
const buzz = document.getElementById('buzz');
const runBtn = document.getElementById('run-btn');
const wrap = document.getElementById('wrap');

runBtn.addEventListener('click', function () {
  wrap.innerHTML = "";

  const initFizz = fizz.value;
  const initBuzz = buzz.value;

  if (!isNumber(initFizz) || !isNumber(initBuzz)) {
    const el = document.createElement('p');
    el.textContent = '整数を入力してください';
    el.style.color = 'red';
    wrap.appendChild(el);

    return;
  }

  for (let i = 1; i < 100; i++) {
    output(i, initFizz, initBuzz);
  }
});

function output(num, initFizz, initBuzz) {
  let prefix = '';

  if (num % initFizz === 0 && num % initBuzz === 0) {
    prefix = 'FizzBuzz';
  } else if (num % initFizz === 0) {
    prefix = 'Fizz';
  } else if (num % initBuzz === 0) {
    prefix = "Buzz";
  } else {
    return
  }

  const el = document.createElement('div');
  el.textContent = `${prefix} ${num}`;
  wrap.appendChild(el);
}

function isNumber(arg) {
  if (arg && Number.isInteger(Number(arg))) {
    return true;
  } else {
    return false;
  }
}