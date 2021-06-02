'use strict';

let arr = ['22', '36', '494', '838', '3891', '250', '6020'];

function showNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === '2' || array[i][0] === '4') {
      console.log(array[i]);
    }
  }
}

showNumbers(arr);

function showPrimeNumber() {
  for (let i = 1; i <= 100; i++) {
    let flag = false;
    for (let k = 2; k < i; k++) {
      if (i % k === 0) {
        flag = true;
        break;
      }
    }
    if (flag === false) {
      console.log(`${i}, Делители этого числа: 1 и ${i}`);
    }
  }
}

showPrimeNumber();