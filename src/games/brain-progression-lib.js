import { cons as consTask } from './../task';
import random from './../random';
import startGame from './../game';

const lengthOfProgression = 10;
const minStartNum = 1;
const maxStartNum = 15;
const taskText = 'What number is missing in this progression?';

const getElementByIndex = (startNumber, step, index) => startNumber + (step * index);

const getQuestion = (startNumber, step, indexHiddenElement) => {
  const iter = (index, acc) => {
    if (index === lengthOfProgression) {
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
  const startNumber = random(minStartNum, maxStartNum);
  const step = random(minStartNum, maxStartNum);
  const indexHiddenElement = random(0, lengthOfProgression - 1);
  const question = getQuestion(startNumber, step, indexHiddenElement);
  const correctAnswer = getElementByIndex(startNumber, step, indexHiddenElement).toString();

  return consTask(question, correctAnswer);
};

export default () => {
  startGame(taskText, generateTask, isValidAnswer);
};
