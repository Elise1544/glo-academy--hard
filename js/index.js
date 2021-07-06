'use strict';

const username = document.getElementById('username'),
  registerUser = document.getElementById('registerUser'),
  login = document.getElementById('login'),
  list = document.getElementById('list');

let users;
if (localStorage.getItem('users') !== null) {
  users = JSON.parse(localStorage.getItem('users'));
} else {
  users = [];
}

const addUser = () => {
  let fullName = prompt('Введите имя и фамилию');
  let fullNameArray = fullName.split(' ');
  if (fullNameArray.length > 2) {
    alert('Некорректное значение');
    addUser();
  } else {
    let date = new Date().toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    });
    let newUser = {
      firstName: fullNameArray[0],
      lastName: fullNameArray[1],
      regDate: date,
      login: prompt('Введите логин'),
      password: prompt('Введите пароль')
    }
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    showOnPage();
  }
}

const showOnPage = () => {
  list.innerHTML = '';
  for (let i = 0; i < users.length; i++) {
    let li = document.createElement('li');
    li.textContent = `Имя: ${users[i].firstName} Фамилия: ${users[i].lastName} Дата регистрации: ${users[i].regDate}`
    list.append(li);
  }
}
showOnPage();

registerUser.addEventListener('click', addUser)
