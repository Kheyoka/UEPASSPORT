'use strict';

const message = prompt('Введите пароль доступа');
const ADMIN_PASSWORD = 'm4ng0h4ckz';

if (message !== null) {
  if (message === ADMIN_PASSWORD) {
    alert('Добро пожаловать!');
  } else {
    alert('Доступ запрещен, неверный пароль!');
  }
} else {
  alert('Отменено пользователем!');
}
