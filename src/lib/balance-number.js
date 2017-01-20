import { getArrayFromNumber, compare as compareNumber, getNumberFromArray } from './number-helper';

export const balanceNumberAsArray = (arr) => {
  const length = arr.length;

  if (length === 0 || length === 1 || arr[length - 1] - arr[0] <= 1) {
    return arr;
  }

  const newArr = arr.slice(1, length - 1);

  newArr.push(arr[0] + 1);
  newArr.push(arr[length - 1] - 1);

  return balanceNumberAsArray(newArr.sort(compareNumber));
};

export const getBalanceNumber = (n) => {
  const arr = getArrayFromNumber(n).sort(compareNumber);

  return getNumberFromArray(balanceNumberAsArray(arr));
};
