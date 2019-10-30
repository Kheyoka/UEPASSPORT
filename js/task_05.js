'use strict';

const question = prompt('Укажите, пожалуйста, страну доставки!');
let value;
const CHINA_COST = 100;
const AMERICA_COST = 250;
const AUSTRALIA_COST = 170;
const INDIA_COST = 80;
const YAMAIKA_COST = 120;

if (question !== null) {
  const questionLowerCase = question.toLowerCase();

  switch (questionLowerCase) {
    case 'китай':
      console.log(
        `Доставка в ${questionLowerCase} будет стоить ${CHINA_COST} кредитов`,
      );
      break;
    case 'южная америка':
      console.log(
        `Доставка в ${questionLowerCase} будет стоить ${AMERICA_COST} кредитов`,
      );
      break;
    case 'австралия':
      console.log(
        `Доставка в ${questionLowerCase} будет стоить ${AUSTRALIA_COST} кредитов`,
      );
      break;
    case 'индия':
      console.log(
        `Доставка в ${questionLowerCase} будет стоить ${INDIA_COST} кредитов`,
      );
      break;
    case 'ямайка':
      console.log(
        `Доставка в ${questionLowerCase} будет стоить ${YAMAIKA_COST} кредитов`,
      );
      break;
    default:
      console.log('В вашей стране доставка не доступна');
      break;
  }
} else {
  console.log('Ждем вас снова');
}
