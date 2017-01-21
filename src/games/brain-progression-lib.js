import { cons as consTask } from './../task';
import random from './../random';
import makeGame from './../game';

const LENGTH_OF_PROGRESSION = 10;
const MIN_START_NUM = 1;
const MAX_START_NUM = 15;

const getElementByIndex = (startNumber, step, index) => startNumber + (step * index);

const getQuestion = (startNumber, step, indexHiddenElement) => {
  const iter = (index, acc) => {
    if (index === LENGTH_OF_PROGRESSION) {
      return acc;
    }

    if (index === indexHiddenElement) {
      return iter(index + 1, `${acc} ..`);
    }

    return iter(index + 1, `${acc} ${getElementByIndex(startNumber, step, index)}`);
  };

  return iter(0, '');
};

const isValidAnswer = answer => answer !== '';

const generateTask = () => {
  const startNumber = random(MIN_START_NUM, MAX_START_NUM);
  const step = random(MIN_START_NUM, MAX_START_NUM);
  const indexHiddenElement = random(0, LENGTH_OF_PROGRESSION - 1);
  const question = getQuestion(startNumber, step, indexHiddenElement);
  const correctAnswer = getElementByIndex(startNumber, step, indexHiddenElement).toString();

  return consTask(question, correctAnswer);
};

const setting = {
  isValidAnswer,
  taskText: 'What number is missing in this progression?',
};

export default () => {
  makeGame(setting, generateTask);
};
