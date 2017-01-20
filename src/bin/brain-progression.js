#!/usr/bin/env node

import { isValidAnswer, createTask } from './../lib/games/brain-progression-lib';
import { makeGame } from './../lib/game';
import { consExtended as consExtendedSeries } from './../lib/series-progression';
import { readline, log } from './../lib/console';

const SERIES_FOR_TASK1 = consExtendedSeries(10, 5, 2);
const INDEX_HIDDEN_ELEMENT_FOR_TASK1 = 5;
const SERIES_FOR_TASK2 = consExtendedSeries(10, 3, 3);
const INDEX_HIDDEN_ELEMENT_FOR_TASK2 = 9;
const SERIES_FOR_TASK3 = consExtendedSeries(10, 7, 5);
const INDEX_HIDDEN_ELEMENT_FOR_TASK3 = 0;
const TASK1 = createTask(SERIES_FOR_TASK1, INDEX_HIDDEN_ELEMENT_FOR_TASK1);
const TASK2 = createTask(SERIES_FOR_TASK2, INDEX_HIDDEN_ELEMENT_FOR_TASK2);
const TASK3 = createTask(SERIES_FOR_TASK3, INDEX_HIDDEN_ELEMENT_FOR_TASK3);
const TEXT_OF_EXERCISE = 'What number is missing in this progression?';

makeGame(TEXT_OF_EXERCISE, log, readline, isValidAnswer, [TASK1, TASK2, TASK3]);

