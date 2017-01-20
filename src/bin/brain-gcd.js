#!/usr/bin/env node

import { cons as consPair } from 'hexlet-pairs';
import { isValidAnswer, createTask } from './../lib/games/brain-gcd-lib';
import { makeGame } from './../lib/game';
import { readline, log } from './../lib/console';

const PAIR_FOR_TASK1 = consPair(25, 50);
const PAIR_FOR_TASK2 = consPair(100, 52);
const PAIR_FOR_TASK3 = consPair(3, 9);
const TASK1 = createTask(PAIR_FOR_TASK1);
const TASK2 = createTask(PAIR_FOR_TASK2);
const TASK3 = createTask(PAIR_FOR_TASK3);
const TEXT_OF_EXERCISE = 'Find the greatest common divisor of given numbers.';

makeGame(TEXT_OF_EXERCISE, log, readline, isValidAnswer, [TASK1, TASK2, TASK3]);
