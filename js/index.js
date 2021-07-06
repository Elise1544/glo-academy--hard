'use strict';

const username = document.getElementById('username'),
  registerUser = document.getElementById('registerUser'),
  login = document.getElementById('login'),
  list = document.getElementById('list');

let buttons = document.querySelectorAll('.remove');

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
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'remove'
    deleteBtn.textContent = 'удалить';
    deleteBtn.style.cssText = `
    margin-left: 20px;
    `;
    li.textContent = `Имя: ${users[i].firstName} Фамилия: ${users[i].lastName} Дата регистрации: ${users[i].regDate}`
    list.append(li);
    li.append(deleteBtn);
  }
  buttons = document.querySelectorAll('.remove');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      let index;
      for (let i = 0; i < list.children.length; i++) {
        if (button.closest('li') === list.children[i]) {
          index = i;
        }
      }
      users.splice(index, 1)
      localStorage.setItem('users', JSON.stringify(users))
      showOnPage();
    });
  })
}
showOnPage();

const logIn = () => {
  let userLogin = prompt('Введите логин');
  let userPassword = prompt('Введите пароль');
  let flag = false;
  let currentUser;
  for (let i = 0; i < users.length; i++) {
    if (userLogin === users[i].login && userPassword === users[i].password) {
      flag = true;
      currentUser = users[i];
      break;
    } 
  }
  if (flag) {
    username.textContent = currentUser.firstName;
  } else {
    alert('Пользователя с такими данными не существует');
    username.textContent = 'Аноним';
  }
}

registerUser.addEventListener('click', addUser);
login.addEventListener('click', logIn);