'use strict';

const guessNumber = () => {
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

    const enterNumber = () => {
      const userPredictNumber = prompt(`Введите число от ${min} до ${max}, 
        у вас ${userAttempts - arrayPredictNumber.length} попытки`, '');

      switch (true) {
        case userPredictNumber === null:
          alert('Игра закончилась');
          return;

        case Number.isNaN(+userPredictNumber):
        case userPredictNumber.trim() === '':
          alert('Введите число!');
          break;

        case arrayPredictNumber.includes(+userPredictNumber):
          alert('Это число вы уже вводили');
          break;

        case userPredictNumber > max:
        case userPredictNumber < min:
          alert(`Число ${userPredictNumber} не входит в диапазон чисел от 
            ${min} до ${max}`);
          break;

        case +userPredictNumber !== hiddenNumber:
          arrayPredictNumber.push(+userPredictNumber);
          if (arrayPredictNumber.length !== userAttempts) {
            alert(`Загаданное число ${userPredictNumber > hiddenNumber ?
              'меньше' : 'больше'} ${userPredictNumber} !`);
          } else {
            alert('Попытки закончились');
            return;
          }
          break;

        default:
          alert(`Вы угадали это число ${hiddenNumber}`);
          return;
      }

      enterNumber();
    };

    enterNumber();
  }
};

guessNumber();


