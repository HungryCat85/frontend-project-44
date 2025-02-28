#!/usr/bin/env node
import greetings from '../src/games/cli.js';
import brainProgression from '../src/games/progression_cli.js';

const name1 = greetings();
if (brainProgression() === true) console.log(`Congratulations, ${name1}!`);
else console.log(`Let's try again, ${name1}!`);
