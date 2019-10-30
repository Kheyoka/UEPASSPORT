'use strict';

const total = 100;
const ordered = 50;
const newOrder = Number(prompt('Количество товаров: '));
if (total < newOrder) {
  alert('На складе не достаточно товаров!');
} else {
  alert('Заказ оформлен, с вами свяжется менеджер!');
}
