#!/usr/bin/env node
import greetings from '../src/cli.js';
import brainEven from '../src/even_cli.js';

const name1 = greetings();
if (brainEven() === true) console.log(`Congratulations, ${name1}!`);
  else console.log(`Let's try again, ${name1}!`);
