#!/usr/bin/env node
import greetings from '../src/games/cli.js';
import brainGcd from '../src/games/gcd_cli.js';

const name1 = greetings();
if (brainGcd() === true) console.log(`Congratulations, ${name1}!`);
else console.log(`Let's try again, ${name1}!`);
