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
