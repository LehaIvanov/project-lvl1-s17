import { getArrayFromNumber, compare as compareNumber, getNumberFromArray } from './number-helper';

export const balancing = (arr) => {
  const length = arr.length;

  if (arr[length - 1] - arr[0] <= 1) {
    return arr;
  }

  const newArr = [];
  const changedFirstElem = arr[0] + 1;
  const changedLastElem = arr[length - 1] - 1;
  let index = 1;

  while (arr[index] < changedFirstElem && index < length - 1) {
    newArr.push(arr[index]);
    index += 1;
  }

  newArr.push(changedFirstElem);

  while (arr[index] < changedLastElem && index < length - 1) {
    newArr.push(arr[index]);
    index += 1;
  }

  newArr.push(changedLastElem);

  while (index < length - 1) {
    newArr.push(arr[index]);
    index += 1;
  }

  return balancing(newArr);
};

export const getBalanceNumber = (n) => {
  const arr = getArrayFromNumber(n).sort(compareNumber);

  return getNumberFromArray(balancing(arr));
};
