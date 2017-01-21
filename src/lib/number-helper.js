export const compare = (a, b) => a - b;

export const getArrayFromNumber = (n) => {
  const iter = (number, acc) => {
    if (number === 0) {
      return acc;
    }

    acc.push(number % 10);

    return iter(Math.floor(number / 10), acc);
  };

  return iter(n, []);
};

export const getNumberFromArray = arr => arr.reduce((acc, current) => (acc * 10) + current, 0);

export const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  const maxDivider = Math.floor(Math.sqrt(n));
  const iter = (divider) => {
    if (divider > maxDivider) {
      return true;
    }

    if (n % divider === 0) {
      return false;
    }

    return iter(divider + 1);
  };

  return iter(2);
};
