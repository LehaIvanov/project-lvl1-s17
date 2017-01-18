import readlineSync from 'readline-sync';

export const readline = message => readlineSync.question(message);

export const log = message => console.log(message);
