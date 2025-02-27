#!/usr/bin/env node
import greetings from '../src/games/cli.js';
import brainCalc from '../src/games/calc_cli.js';

const name1 = greetings();
if (brainCalc() === true) console.log(`Congratulations, ${name1}!`);
  else console.log(`Let's try again, ${name1}!`);
