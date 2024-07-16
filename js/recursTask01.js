'use strict';

let min;
let max;
const interval = [];

const getArrayNumbers = (arr) => {
  const answer = prompt(`Введите ${!arr.length ?
    'первое' : 'второе'} число`, '');

  if (answer === null) {
    return alert('Игра прервана');
  }

  if (Number.isNaN(+answer) || answer.trim() === '') {
    alert('Введите число!');
    getArrayNumbers(arr);
  }

  if (!Number.isNaN(+answer) && answer.trim() !== '' &&
  !interval.includes(+answer)) {
    interval.push(+answer);
  }

  if (interval.length < 2 && interval[interval.length - 1] !== null) {
    getArrayNumbers(arr);
  }

  return arr;
};

getArrayNumbers(interval);

if (interval.length === 2) {
  [min, max] = interval.sort((a, b) => (+a > +b ? 1 : -1));

  const userAttempts = Math.round((max - min) * 0.3);
  const hiddenNumber = Math.floor(Math.random() * (+max - +min + 1)) + +min;
  console.log('hiddenNumber: ', hiddenNumber);
  const arrayPredictNumber = [];

  const getGuessNumber = () => {
    const userPredictNumber = prompt(`Введите число от ${min} до ${max}, 
      у вас ${userAttempts - arrayPredictNumber.length} попытки`, '');

    switch (true) {
      case userPredictNumber === null:
        alert('Игра закончилась');
        break;

      case Number.isNaN(+userPredictNumber):
      case userPredictNumber.trim() === '':
        alert('Введите число!');
        getGuessNumber();
        break;

      case arrayPredictNumber.includes(+userPredictNumber):
        alert('Это число вы уже вводили');
        getGuessNumber();
        break;

      case userPredictNumber > max:
      case userPredictNumber < min:
        alert(`Число ${userPredictNumber} не входит в диапазон чисел от 
          ${min} до ${max}`);
        getGuessNumber();
        break;

      case userPredictNumber > hiddenNumber:
        arrayPredictNumber.push(+userPredictNumber);
        if (arrayPredictNumber.length !== userAttempts) {
          alert(`Загаданное число меньше ${userPredictNumber} !`);
          getGuessNumber();
        } else {
          alert('Попытки закончились');
        }
        break;

      case userPredictNumber < hiddenNumber:
        arrayPredictNumber.push(+userPredictNumber);
        if (arrayPredictNumber.length !== userAttempts) {
          alert(`Загаданное число больше ${userPredictNumber} !`);
          getGuessNumber();
        } else {
          alert('Попытки закончились');
        }
        break;

      default:
        alert(`Вы угадали это число ${hiddenNumber}`);
        break;
    }

    return;
  };

  getGuessNumber();
}
