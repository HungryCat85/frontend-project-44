#!/usr/bin/env node
import greetings from '../src/games/cli.js';
import brainPrime from '../src/games/prime_cli.js';

const name1 = greetings();
if (brainPrime() === true) console.log(`Congratulations, ${name1}!`);
  else console.log(`Let's try again, ${name1}!`);
