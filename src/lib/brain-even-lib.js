export const getCorrectAnswer = question => (question % 2 === 0 ? 'yes' : 'no');

export const isValidAnswer = answer => answer === 'yes' || answer === 'no';

export const askQuestion = (question, getAnswer) => {
  const answer = getAnswer(question);

  if (!isValidAnswer(answer)) {
    return askQuestion(question, getAnswer);
  }

  return answer;
};

export const iterGame = (log, getAnswer, question) => {
  const answer = askQuestion(question, getAnswer);
  const correctAnswer = getCorrectAnswer(question);
  const isCorrect = answer === correctAnswer;

  if (isCorrect) {
    log('Correct!');
  } else {
    log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }

  return isCorrect;
};

export const makeGame = (userName, log, getAnswer, question1, question2, question3) => {
  if (iterGame(log, getAnswer, question1) && iterGame(log, getAnswer, question2) &&
      iterGame(log, getAnswer, question3)) {
    log(`Congratulations, ${userName}!\n`);
  } else {
    log(`Let's try again, ${userName}!`);
  }
};
