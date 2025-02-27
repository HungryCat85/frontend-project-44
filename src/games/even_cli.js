import _ from 'lodash';
import { question, analiz } from '../index.js';

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const odd = (number) => (number % 2 === 0 ? 'yes' : 'no');

  for (let i = 0; i <= 2; i += 1) {
    const num = _.random(1, 100);
    const ans = question(num);
    const rAns = odd(num);
    if (!analiz(ans, rAns)) return false;
  }
  return true;
};
