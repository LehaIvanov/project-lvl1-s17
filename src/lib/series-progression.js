import { cons as consPair, car, cdr } from 'hexlet-pairs';
import { cons as consProgression, getStartNumber, getStep } from './progression';

export const cons = (length, progression) => consPair(length, progression);

export const consExtended = (length, startNumber, step) =>
  consPair(length, consProgression(startNumber, step));

export const getLength = series => car(series);

export const getProgression = series => cdr(series);

export const elementByIndex = (series, index) => {
  const length = getLength(series);

  if (index < 0 || index >= length) {
    return undefined;
  }
  const progression = getProgression(series);
  const startNumber = getStartNumber(progression);
  const step = getStep(progression);

  return startNumber + (step * index);
};

export const reduce = (series, func, startValue) => {
  const length = getLength(series);
  const progression = getProgression(series);
  const startNumber = getStartNumber(progression);
  const step = getStep(progression);

  const iter = (index, acc) => {
    if (index >= length) {
      return acc;
    }

    const curr = startNumber + (index * step);

    return iter(index + 1, func(acc, curr, index));
  };

  return iter(0, startValue);
};
