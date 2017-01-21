import { isPrime as isPrimeNumber } from './../number-helper';
import { cons as consTask } from './../task';

export const isValidAnswer = answer => answer === 'yes' || answer === 'no';

export const createTask = (number) => {
  const correctAnswer = isPrimeNumber(number) ? 'yes' : 'no';

  return consTask(number, correctAnswer);
};
