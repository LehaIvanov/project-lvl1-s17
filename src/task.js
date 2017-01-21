import { cons as consPair, car, cdr } from 'hexlet-pairs';

export const cons = (text, correctAnswer) => consPair(text, correctAnswer);

export const getText = task => car(task);

export const getCorrectAnswer = task => cdr(task);
