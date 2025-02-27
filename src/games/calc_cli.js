import _ from 'lodash';
import { question, analiz } from '../index.js';

export default () => {
  const sign = ['+', '-', '*'];
  console.log('What is the result of the expression?');
  for (let i = 0; i <= 2; i += 1) {
    const a = _.random(1, 100);
    const b = _.random(1, 100);
    const indexS = _.random(0, 2);
    const expr = `${a} ${sign[indexS]} ${b}`;
    const ans = question(expr);
    let rAns;
    switch (indexS) {
      case 0: rAns = a + b;
        break;
      case 1: rAns = a - b;
        break;
      case 2: rAns = a * b;
        break;
      default: break;
    }
    if (!analiz(ans, rAns)) return false;
  }
  return true;
};
