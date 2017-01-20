#!/usr/bin/env node

import { isValidAnswer, createTask } from './../lib/brain-even-lib';
import { makeGame } from './../lib/game';
import { readline, log } from './../lib/console';

const NUM_FOR_TASK1 = 15;
const NUM_FOR_TASK2 = 6;
const NUM_FOR_TASK3 = 15;
const TASK1 = createTask(NUM_FOR_TASK1);
const TASK2 = createTask(NUM_FOR_TASK2);
const TASK3 = createTask(NUM_FOR_TASK3);
const TEXT_OF_EXERCISE = 'Answer "yes" if number odd otherwise answer "no".';

makeGame(TEXT_OF_EXERCISE, log, readline, isValidAnswer, [TASK1, TASK2, TASK3]);
