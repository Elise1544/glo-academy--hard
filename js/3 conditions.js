'use strict';

let lang = 'ru';

let daysOnRussian = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let daysOnEnglish = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

if (lang == 'ru') {
  console.log(daysOnRussian);
} else if (lang == 'en') {
  console.log(daysOnEnglish);
}

switch(lang) {
  case 'ru':
    console.log(daysOnRussian);
    break;
  case 'en':
    console.log(daysOnEnglish);
    break;
}

let days = {
  'ru': daysOnRussian,
  'en': daysOnEnglish,
};

console.log(days[lang]);

let lang_array = [];
lang_array['ru'] = daysOnRussian;
lang_array['en'] = daysOnEnglish;
console.log(lang_array[lang]);

let namePerson = 'Артем';

namePerson === 'Артем' ? console.log('директор') : 
namePerson === 'Максим' ? console.log('преподаватель') : 
console.log('студент');