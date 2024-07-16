'use strict';

const getArrayRandomCount = (arr) => {
  const arrayRandom = [...arr, Math.floor(Math.random() * 10) + 1];

  if (arrayRandom.reduce((acc, item) => acc += item) >= 50) {
    return arrayRandom;
  } else {
    return getArrayRandomCount(arrayRandom);
  }
};

console.log(getArrayRandomCount([]));
