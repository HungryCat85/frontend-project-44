import _ from 'lodash';
import readlineSync from 'readline-sync';

const odd = (number) => (number % 2 === 0 ? 'yes' : 'no');

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i <= 2; i += 1) {
    const num = _.random(1, 100);
    console.log(`Question: ${num}`);
    const ans = readlineSync.question('Your answer: ');
    const rAns = odd(num);
    if (((ans !== 'yes') && (ans !== 'no')) || (ans !== rAns)) {
      console.log(`'${ans}' is wrong answer ;(. Correct answer was '${rAns}'.`);
      return false;
    }
    console.log('Correct!');
  }
  return true;
};
