#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { makeGame } from './../lib/brain-even-lib';

const NUM_FOR_QUESTION1 = 15;
const NUM_FOR_QUESTION2 = 6;
const NUM_FOR_QUESTION3 = 15;

console.log('Welcome to the Brain Games!\nAnswer "yes" if number odd otherwise answer "no".\n');

const userName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${userName}!\n`);

const getAnswer = question => readlineSync.question(`Question: ${question}\nYour answer: `);
const log = message => console.log(message);

makeGame(userName, log, getAnswer, NUM_FOR_QUESTION1, NUM_FOR_QUESTION2, NUM_FOR_QUESTION3);
