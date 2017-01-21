import { cons as consTask } from './../task';
import random from './../random';
import makeGame from './../game';

const MIN_NUMBER = 1;
const MAX_NUMBER = 999;

const isValidAnswer = answer => answer === 'yes' || answer === 'no';

const generateTask = () => {
  const number = random(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  return consTask(number, correctAnswer);
};

const setting = {
  isValidAnswer,
  taskText: 'Answer "yes" if number odd otherwise answer "no".',
};

export default () => {
  makeGame(setting, generateTask);
};
