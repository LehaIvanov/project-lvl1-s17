import { cons as consPair, car, cdr } from 'hexlet-pairs';

export const cons = (operator, number1, number2) => consPair(operator, consPair(number1, number2));

export const toString = (expression) => {
  const operator = car(expression);
  const number1 = car(cdr(expression));
  const number2 = cdr(cdr(expression));

  return `${number1} ${operator} ${number2}`;
};

export const getResult = (expression) => {
  const operator = car(expression);
  const num1 = car(cdr(expression));
  const num2 = cdr(cdr(expression));

  switch (operator) {
    case '+': {
      return num1 + num2;
    }
    case '-': {
      return num1 - num2;
    }
    case '*': {
      return num1 * num2;
    }
    default: {
      return null;
    }
  }
};
