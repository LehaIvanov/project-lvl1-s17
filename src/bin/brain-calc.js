#!/usr/bin/env node

import { isValidAnswer, createTask } from './../lib/brain-calc-lib';
import { makeGame } from './../lib/game';
import { cons as consExpression } from './../lib/expression';
import { readline, log } from './../lib/console';

const EXPRESSION_FOR_TASK1 = consExpression('+', 4, 10);
const EXPRESSION_FOR_TASK2 = consExpression('-', 25, 11);
const EXPRESSION_FOR_TASK3 = consExpression('*', 25, 7);
const TASK1 = createTask(EXPRESSION_FOR_TASK1);
const TASK2 = createTask(EXPRESSION_FOR_TASK2);
const TASK3 = createTask(EXPRESSION_FOR_TASK3);
const TEXT_OF_EXERCISE = 'What is the result of the expression?';

makeGame(TEXT_OF_EXERCISE, log, readline, isValidAnswer, TASK1, TASK2, TASK3);
