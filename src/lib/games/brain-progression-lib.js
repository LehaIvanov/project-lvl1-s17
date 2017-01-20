import { cons as consTask } from './../task';
import { elementByIndex, reduce as reduceSeries } from './../series-progression';

export const isValidAnswer = answer => answer !== '';

export const createFunctionForCreateQestion = indexHiddenElement => (acc, curr, index) => {
  const value = index === indexHiddenElement ? '..' : curr;

  return index === 0 ? `${value}` : `${acc} ${value}`;
};

export const createTask = (series, indexHiddenElement) => {
  const text = reduceSeries(series, createFunctionForCreateQestion(indexHiddenElement), '');
  const correctAnswer = elementByIndex(series, indexHiddenElement).toString();

  return consTask(text, correctAnswer);
};
