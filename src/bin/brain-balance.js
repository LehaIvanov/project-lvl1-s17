#!/usr/bin/env node

import { isValidAnswer, createTask } from './../lib/brain-balance-lib';
import { makeGame } from './../lib/game';
import { readline, log } from './../lib/console';

const NUM_FOR_TASK1 = 215;
const NUM_FOR_TASK2 = 4181;
const NUM_FOR_TASK3 = 355;
const TASK1 = createTask(NUM_FOR_TASK1);
const TASK2 = createTask(NUM_FOR_TASK2);
const TASK3 = createTask(NUM_FOR_TASK3);
const TEXT_OF_EXERCISE = 'Balance the given number.';

makeGame(TEXT_OF_EXERCISE, log, readline, isValidAnswer, [TASK1, TASK2, TASK3]);
