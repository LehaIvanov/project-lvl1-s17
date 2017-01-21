import readlineSync from 'readline-sync';
import { getCorrectAnswer, getText as getQuestion } from './task';

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

export default (settings, generateTask, log = consoleLog, readline = consoleReadline) => {
  const { countIterations = 3, isValidAnswer, taskText } = settings;

  log(`Welcome to the Brain Games!\n${taskText}\n`);

  const userName = readline('May I have your name? ');
  let index = 0;

  log(`Hello, ${userName}!\n`);

  while (index < countIterations && iterGame(log, readline, isValidAnswer, generateTask())) {
    index += 1;
  }

  if (index === countIterations) {
    log(`Congratulations, ${userName}!\n`);
  } else {
    log(`Let's try again, ${userName}!`);
  }
};
