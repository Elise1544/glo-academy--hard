'use strict';

function showDate() {
  let date;

  const monthNames = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня',
    'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
  const dayNames = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  function showHours() {
    switch (date.getHours()) {
      case 1:
      case 21:
        return `${date.getHours()} час`;
      case 2:
      case 3:
      case 4:
      case 22:
      case 23:
        return `${date.getHours()} часа`;
      default:
        return `${date.getHours()} часов`;
    }
  };

  function showTime(time, interval) {
    if (time == 1 || time == 21 || time == 31 || time == 41 || time == 51) {
      return `${interval}а`;
    } else if ((time >= 2 && time <= 4) ||
      (time >= 22 && time <= 24) ||
      (time >= 32 && time <= 34) ||
      (time >= 42 && time <= 44) ||
      (time >= 52 && time <= 54)) {
      return `${interval}ы`;
    } else {
      return `${interval}`;
    }
  };

  function showFullDate() {
    date = new Date();
    return `Сегодня ${dayNames[date.getDay()]}, ${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()} года, ${showHours()} ${date.getMinutes()} ${showTime(date.getMinutes(), 'минут')} ${date.getSeconds()} ${showTime(date.getSeconds(), 'секунд')}`
  }

  function addZero(dd) {
    if (dd < 10) {
      dd = '0' + dd;
    }
    return dd;
  }

  function showShortDate() {
    date = new Date();
    return `${addZero(date.getDate())}.${addZero(date.getMonth())}.${addZero(date.getFullYear())} - ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`
  }

  let fulltimeDiv = document.createElement('div');
  let shorttimeDiv = document.createElement('div');
  document.body.append(fulltimeDiv);
  document.body.append(shorttimeDiv);

  function setStyle(element) {
    element.style.fontSize = '45px';
    element.style.border = '2px solid purple';
    element.style.textAlign = 'center';
    element.style.margin = '70px';
    element.style.padding = '15px';
  }

  setStyle(fulltimeDiv);
  setStyle(shorttimeDiv);

  setInterval(function () {
    fulltimeDiv.textContent = showFullDate();
    shorttimeDiv.textContent = showShortDate();
  }, 1000);
}

showDate();
