import _ from 'lodash';
import { question, analiz } from '../index.js';

const NOD = (x, y) => {
  let a = x;
  let b = y;
  if (x < y) {
    a = y;
    b = x;
  }

  let ost1 = b; // считаем НОД
  let ost2 = a % b;
  let temp;
  while (ost2 !== 0) {
    temp = ost2;
    ost2 = ost1 % ost2;
    ost1 = temp;
  }
  return ost1;
};

export default () => {
  console.log('Find the greatest common divisor of given numbers');
  for (let i = 0; i <= 2; i += 1) {
    const a = _.random(1, 1000);
    const b = _.random(1, 1000);
    const expr = `${a} ${b}`;
    const ans = question(expr);
    const rAns = NOD(a, b);
    if (!analiz(ans, rAns)) return false;
  }
  return true;
};
