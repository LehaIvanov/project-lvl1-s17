import { cons as consTask } from './../task';
import random from './../random';
import startGame from './../game';

const minNumber = 1;
const maxNumber = 999;
const taskText = 'Answer "yes" if number odd otherwise answer "no".';

const isValidAnswer = answer => answer === 'yes' || answer === 'no';

const generateTask = () => {
  const number = random(minNumber, maxNumber);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  return consTask(number, correctAnswer);
};

export default () => {
  startGame(taskText, generateTask, isValidAnswer);
};
