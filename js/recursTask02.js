'use strict';

const getArrayRandomCount = ([...arr]) => {
  arr.push(Math.floor(Math.random() * 10) + 1);

  if (arr.reduce((acc, item) => acc += item) < 50) {
    return getArrayRandomCount(arr);
  } else {
    return arr;
  }
};

console.log(getArrayRandomCount([]));
