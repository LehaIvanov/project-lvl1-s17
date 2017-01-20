import { getCorrectAnswer, getText as getQuestion } from './task';

export const askQuestion = (task, readline, isValidAnswer) => {
  const question = getQuestion(task);
  const answer = readline(`Question: ${question}\nYour answer: `);

  if (!isValidAnswer(answer)) {
    return askQuestion(task, readline, isValidAnswer);
  }

  return answer;
};

export const iterGame = (log, readline, isValidAnswer, task) => {
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

export const makeGame = (gameText, log, readline, isValidAnswer, tasks) => {
  log(`Welcome to the Brain Games!\n${gameText}\n`);

  const userName = readline('May I have your name? ');
  let index = 0;

  log(`Hello, ${userName}!\n`);

  while (index < tasks.length && iterGame(log, readline, isValidAnswer, tasks[index])) {
    index += 1;
  }

  if (index === tasks.length) {
    log(`Congratulations, ${userName}!\n`);
  } else {
    log(`Let's try again, ${userName}!`);
  }
};
