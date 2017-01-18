import hexletPairs from 'hexlet-pairs';

export const cons = (question, correctAnswer) => hexletPairs.cons(question, correctAnswer);

export const check = (test, answer) => hexletPairs.cdr(test) === answer;
