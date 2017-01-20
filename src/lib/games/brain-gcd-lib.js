import { car, cdr } from 'hexlet-pairs';
import { cons as consTask } from './../task';

export const isValidAnswer = answer => answer !== '';

export const getGcd = (a, b) => {
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

export const createTask = (pair) => {
  const num1 = car(pair);
  const num2 = cdr(pair);
  const text = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2).toString();

  return consTask(text, correctAnswer);
};
