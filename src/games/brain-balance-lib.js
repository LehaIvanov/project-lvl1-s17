import { cons as consTask } from './../task';
import random from './../random';
import startGame from './../game';

const MIN_NUMBER = 100;
const MAX_NUMBER = 9999;
const TASK_TEXT = 'Balance the given number.';

const compareNumber = (a, b) => a - b;

const getArrayFromNumber = (n) => {
  const iter = (number, acc) => {
    if (number === 0) {
      return acc;
    }

    acc.push(number % 10);

    return iter(Math.floor(number / 10), acc);
  };

  return iter(n, []);
};

const getNumberFromArray = arr => arr.reduce((acc, current) => (acc * 10) + current, 0);

const balanceNumberAsArray = (arr) => {
  const length = arr.length;

  if (length === 0 || length === 1 || arr[length - 1] - arr[0] <= 1) {
    return arr;
  }

  const newArr = arr.slice(1, length - 1);

  newArr.push(arr[0] + 1);
  newArr.push(arr[length - 1] - 1);

  return balanceNumberAsArray(newArr.sort(compareNumber));
};

const getBalanceNumber = (n) => {
  const arr = getArrayFromNumber(n).sort(compareNumber);

  return getNumberFromArray(balanceNumberAsArray(arr));
};


const isValidAnswer = answer => answer !== '';

const generateTask = () => {
  const number = random(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = getBalanceNumber(number).toString();

  return consTask(number, correctAnswer);
};

export default () => {
  startGame(TASK_TEXT, generateTask, isValidAnswer);
};

