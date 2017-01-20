
export const getArrayFromNumber = (n) => {
  const result = [];
  const iter = (number, acc) => {
    if (number === 0) {
      return acc;
    }

    return iter(Math.floor(number / 10), acc.push(number % 10));
  };

  return iter(n, result);
};

export const getBalanceNumber = n => n;
