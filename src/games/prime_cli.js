import _ from 'lodash';
import { question, analiz } from '../index.js';

// Проверка на простое число
function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

export default () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i <= 2; i += 1) {
    const num = _.random(1, 100);
    const ans = question(num);
    const rAns = (isPrime(num) ? 'yes' : 'no');

    if (!analiz(ans, rAns)) return false;
  }
  return true;
};
