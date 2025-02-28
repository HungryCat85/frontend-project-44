import _ from 'lodash';
import { question, analiz } from '../index.js';

export default () => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i <= 2; i += 1) {
  /* генерируем последовательность, шаг последовательности
  и индекс искомого числа */
    const len = _.random(5, 15);
    const dif = _.random(1, 50);
    const index = _.random(0, len - 1);
    const arr = [];
    arr[0] = _.random(0, 500);
    for (let j = 0; j <= len - 2; j += 1) {
      arr.push(arr[j] + dif);
    }
    const rAns = arr[index];
    arr[index] = '..';

    const expr = arr.join(' ')// `${arr}`;
    const ans = question(expr);
    if (!analiz(ans, rAns)) return false;
  }
  return true;
};
