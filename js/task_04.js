'use strict';

const credits = 23580;
const pricePerDroid = 3000;

const userInput = prompt('Сколько дроидов выхотите купить?');
const totalPrice = pricePerDroid * userInput;

if (userInput !== null && Number(userInput) > 0) {
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    console.log(
      `Вы купили ${userInput}, на счету осталось ${credits - totalPrice}`,
    );
  }
} else {
  console.log('Отменено пользователем!');
}
