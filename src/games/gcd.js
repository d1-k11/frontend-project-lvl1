import { randomGen } from '../index.js';

export const condition = 'Find the greatest common divisor of given numbers.';

export const randomExpressionGen = () => {
  const num1 = randomGen(100);
  const num2 = randomGen(100);
  return `${num1} ${num2}`;
};

export const prepareExp = (string) => {
  const strToArr = string.split([' ']);
  const strToNum = (i) => Number(strToArr[i]);
  const num1 = strToNum(0);
  const num2 = strToNum(1);

  const factorizator = (num, div = 2, arr = [1]) => {
    if (num === 1) {
      return arr;
    }
    if (num % div === 0) {
      arr.push(div);
      factorizator(num / div, div, arr);
    } else {
      factorizator(num, div + 1, arr);
    }
    return arr;
  };

  const mltplrsOfNum1 = factorizator(num1);
  const mltplrsOfNum2 = factorizator(num2);

  const getIntersectionOfArrays = (arr1, arr2) => {
    const size1 = arr1.length;
    const size2 = arr2.length;
    let index1 = 0;
    let index2 = 0;
    const result = [];
    while (index1 < size1 && index2 < size2) {
      if (arr1[index1] === arr2[index2]) {
        result.push(arr1[index1]);
        index1 += 1;
        index2 += 1;
      } else if (arr1[index1] > arr2[index2]) {
        index2 += 1;
      } else {
        index1 += 1;
      }
    }
    return result;
  };

  const intersection = getIntersectionOfArrays(mltplrsOfNum1, mltplrsOfNum2);
  const reducer = (acc, currentValue) => acc * currentValue;
  const getGcd = intersection.reduce(reducer);
  return getGcd;
};