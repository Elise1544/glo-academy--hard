'use strict';

function showString(str) {
  if (typeof(str) !== 'string') {
    return ('Введите строку');
  } else {
    str = str.trim();
    if (str.length > 30) {
      str = str.slice(0, 30) + '...';
    }
    return str;
  }
}

console.log(showString('            11231321123123012321321321321312                        '));