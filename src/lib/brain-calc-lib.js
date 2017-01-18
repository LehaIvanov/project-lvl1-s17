import { cons as consTask } from './task';
import { toString, getResult } from './expression';

export const isValidAnswer = answer => answer !== '';

export const createTask = (expression) => {
  const text = toString(expression);
  const correctAnswer = `${getResult(expression)}`;

  return consTask(text, correctAnswer);
};
