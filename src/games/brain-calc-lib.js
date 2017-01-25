import { cons as consTask } from './../task';
import random from './../random';
import startGame from './../game';

const minNumber = 0;
const maxNumber = 20;
const operators = ['-', '+', '*'];
const taskText = 'What is the result of the expression?';

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
  const number1 = random(minNumber, maxNumber);
  const number2 = random(minNumber, maxNumber);
  const operator = operators[random(0, operators.length - 1)];
  const question = getQuestion(operator, number1, number2);
  const correctAnswer = getCorrectAnswer(operator, number1, number2).toString();

  return consTask(question, correctAnswer);
};

export default () => {
  startGame(taskText, generateTask, isValidAnswer);
};
