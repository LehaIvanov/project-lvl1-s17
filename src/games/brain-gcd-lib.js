import { cons as consTask } from './../task';
import random from './../random';
import startGame from './../game';

const minNumber = 1;
const maxNumber = 100;
const taskText = 'Find the greatest common divisor of given numbers.';

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
  const number1 = random(minNumber, maxNumber);
  const number2 = random(minNumber, maxNumber);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2).toString();

  return consTask(question, correctAnswer);
};

export default () => {
  startGame(taskText, generateTask, isValidAnswer);
};
