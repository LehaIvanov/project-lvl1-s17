import { cons as consTask } from './../task';

export const isValidAnswer = answer => answer === 'yes' || answer === 'no';

export const createTask = (number) => {
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  return consTask(number, correctAnswer);
};
