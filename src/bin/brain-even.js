#!/usr/bin/env node

import readlineSync from 'readline-sync';

const GAME_STATUS = {
  SUCCESS: 1,
  LOSING: 2,
  IN_PROGRESS: 3,
};

const CHECK_TYPE = {
  CORRECT: 1,
  INCORRECT: 2,
  WEIRD: 3,
};

const createQuestion = (random) => {
  const num = random();

  return {
    num,
    correctAnswer: num % 2 === 0 ? 'yes' : 'no',
  };
};

const checkAnswer = (answer, question) => {
  if (answer === question.correctAnswer) {
    return CHECK_TYPE.CORRECT;
  } else if (answer === 'yes' || answer === 'no') {
    return CHECK_TYPE.INCORRECT;
  }

  return CHECK_TYPE.WEIRD;
};

const makeGame = (questions) => {
  if (!questions || questions.length === 0) {
    return GAME_STATUS.SUCCESS;
  }

  const question = questions[0];
  const answer = readlineSync.question(`Question: ${question.num}\nYour answer: `);
  const check = checkAnswer(answer, question);

  if (check === CHECK_TYPE.WEIRD) {
    return makeGame(questions);
  } else if (check === CHECK_TYPE.INCORRECT) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question.correctAnswer}'.`);

    return GAME_STATUS.LOSING;
  }

  console.log('Correct!\n');

  return makeGame(questions.slice(1, questions.length));
};

const questions = [];

questions.push(createQuestion(() => 15));
questions.push(createQuestion(() => 6));
questions.push(createQuestion(() => 15));

console.log('Welcome to the Brain Games!\nAnswer "yes" if number odd otherwise answer "no".\n');

const userName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${userName}!\n`);

const result = makeGame(questions);

if (result === GAME_STATUS.SUCCESS) {
  console.log(`Congratulations, ${userName}!\n`);
} else if (result === GAME_STATUS.LOSING) {
  console.log(`Let's try again, ${userName}!`);
}
