import { cons as consTask } from './../task';
import random from './../random';
import startGame from './../game';

const minNumber = 2;
const maxNumber = 1000;
const taskText = 'Answer "yes" if number prime otherwise answer "no".';

const isPrimeNumber = (n) => {
  if (n < 2) {
    return false;
  }

  const maxDivider = Math.floor(Math.sqrt(n));
  const iter = (divider) => {
    if (divider > maxDivider) {
      return true;
    }

    if (n % divider === 0) {
      return false;
    }

    return iter(divider + 1);
  };

  return iter(2);
};

const isValidAnswer = answer => answer === 'yes' || answer === 'no';

const getPrimeGreaterOrEqualNumber = (number) => {
  if (isPrimeNumber(number)) {
    return number;
  }

  return getPrimeGreaterOrEqualNumber(number + 2);
};

const getNotPrimeGreaterOrEqualNumber = (number) => {
  if (number <= 2) {
    return 4;
  }

  return isPrimeNumber(number) ? number + 1 : number;
};

const generateTask = () => {
  const number = random(minNumber, maxNumber);
  const isShowPrime = Boolean(random(0, 1));

  if (isShowPrime) {
    return consTask(getPrimeGreaterOrEqualNumber(number % 2 === 0 ? number + 1 : number), 'yes');
  }

  return consTask(getNotPrimeGreaterOrEqualNumber(number), 'no');
};

export default () => {
  startGame(taskText, generateTask, isValidAnswer);
};
