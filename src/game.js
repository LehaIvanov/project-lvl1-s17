import readlineSync from 'readline-sync';
import { getCorrectAnswer, getText as getQuestion } from './task';

const GAME_ROUNDS_COUNT = 3;

const consoleReadline = message => readlineSync.question(message);

const consoleLog = message => console.log(message);

const askQuestion = (task, readline, isValidAnswer) => {
  const question = getQuestion(task);
  const answer = readline(`Question: ${question}\nYour answer: `);

  if (!isValidAnswer(answer)) {
    return askQuestion(task, readline, isValidAnswer);
  }

  return answer;
};

const iterGame = (log, readline, isValidAnswer, task) => {
  const answer = askQuestion(task, readline, isValidAnswer);
  const correctAnswer = getCorrectAnswer(task);
  const isCorrect = answer === correctAnswer;

  if (isCorrect) {
    log('Correct!');
  } else {
    log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }

  return isCorrect;
};

export default (taskText, generateTask, isValidAnswer, log = consoleLog,
    readline = consoleReadline) => {
  log(`Welcome to the Brain Games!\n${taskText}\n`);

  const userName = readline('May I have your name? ');
  let index = 0;

  log(`Hello, ${userName}!\n`);

  while (index < GAME_ROUNDS_COUNT && iterGame(log, readline, isValidAnswer, generateTask())) {
    index += 1;
  }

  if (index === GAME_ROUNDS_COUNT) {
    log(`Congratulations, ${userName}!\n`);
  } else {
    log(`Let's try again, ${userName}!`);
  }
};
