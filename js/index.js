'use strict';

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let data = new Date();

for (let i = 0; i < week.length; i++) {
  if (((6 + data.getDay()) % 7) === i) {
    document.write(`<p>${week[i].bold()}</p>`);
  } else if (i === 6 || i === 5) {
    document.write(`<p>${week[i].italics()}</p>`);
  } else {
    document.write(`<p>${week[i]}</p>`);
  }
}