import readlineSync from 'readline-sync';

const question = (num) => {
  console.log(`Question: ${num}`);
  const ans = readlineSync.question('Your answer: ');
  return ans;
};

const analiz = (ans, rAns) => {
  if (ans.toString() !== rAns.toString()) {
    console.log(`'${ans}' is wrong answer ;(. Correct answer was '${rAns}'.`);
    return false;
  }
  console.log('Correct!');
  return true;
};

export { question, analiz };
