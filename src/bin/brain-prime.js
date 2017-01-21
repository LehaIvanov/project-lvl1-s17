#!/usr/bin/env node

import { isValidAnswer, createTask } from './../lib/games/brain-prime-lib';
import { makeGame } from './../lib/game';
import { readline, log } from './../lib/console';

const NUM_FOR_TASK1 = 15;
const NUM_FOR_TASK2 = 7;
const NUM_FOR_TASK3 = 2017;
const TASK1 = createTask(NUM_FOR_TASK1);
const TASK2 = createTask(NUM_FOR_TASK2);
const TASK3 = createTask(NUM_FOR_TASK3);
const TEXT_OF_EXERCISE = 'Answer "yes" if number prime otherwise answer "no".';

makeGame(TEXT_OF_EXERCISE, log, readline, isValidAnswer, [TASK1, TASK2, TASK3]);
