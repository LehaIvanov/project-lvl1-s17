import { cons as consTask } from './task';
import { getBalanceNumber } from './balance-number';

export const isValidAnswer = answer => answer !== '';

export const createTask = (number) => {
  const correctAnswer = getBalanceNumber(number).toString();

  return consTask(number, correctAnswer);
};
