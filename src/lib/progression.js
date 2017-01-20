import { cons as consPair, car, cdr } from 'hexlet-pairs';

export const cons = (startNumber, step) => consPair(startNumber, step);

export const getStartNumber = progression => car(progression);

export const getStep = progression => cdr(progression);
