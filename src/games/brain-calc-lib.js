import { cons as consTask } from './../task';
import random from './../random';
import startGame from './../game';

const MIN_NUMBER = 0;
const MAX_NUMBER = 20;
const OPERATORS = ['-', '+', '*'];
const TASK_TEXT = 'What is the result of the expression?';

const getQuestion = (operator, number1, number2) => `${number1} ${operator} ${number2}`;

const getCorrectAnswer = (operator, number1, number2) => {
  switch (operator) {
    case '+': {
      return number1 + number2;
    }
    case '-': {
      return number1 - number2;
    }
    case '*': {
      return number1 * number2;
    }
    default: {
      return null;
    }
  }
};

const isValidAnswer = answer => answer !== '';

const generateTask = () => {
  const number1 = random(MIN_NUMBER, MAX_NUMBER);
  const number2 = random(MIN_NUMBER, MAX_NUMBER);
  const operator = OPERATORS[random(0, OPERATORS.length - 1)];
  const question = getQuestion(operator, number1, number2);
  const correctAnswer = getCorrectAnswer(operator, number1, number2).toString();

  return consTask(question, correctAnswer);
};

export default () => {
  startGame(TASK_TEXT, generateTask, isValidAnswer);
};
