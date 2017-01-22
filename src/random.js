export default (min, max) => {
  const rand = Math.floor(min + (Math.random() * ((max + 1) - min)));

  return rand;
};
