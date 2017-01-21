import { cons as consTask } from './../task';
import random from './../random';
import makeGame from './../game';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const isValidAnswer = answer => answer !== '';

const getGcd = (a, b) => {
  if (b % a === 0) {
    return a;
  }

  if (a % b === 0) {
    return b;
  }

  const maxIndex = a < b ? a / 2 : b / 2;
  const iter = (acc, index) => {
    if (index > maxIndex) {
      return acc;
    }

    if (a % index === 0 && b % index === 0) {
      return iter(index, index + 1);
    }

    return iter(acc, index + 1);
  };

  return iter(1, 1);
};

const generateTask = () => {
  const number1 = random(MIN_NUMBER, MAX_NUMBER);
  const number2 = random(MIN_NUMBER, MAX_NUMBER);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2).toString();

  return consTask(question, correctAnswer);
};

const settings = {
  isValidAnswer,
  taskText: 'Find the greatest common divisor of given numbers.',
};

export default () => {
  makeGame(settings, generateTask);
};
