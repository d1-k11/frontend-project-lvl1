// я протестировал данный генератор, он включает в выдачу как
// верхнюю(max) так и нижнюю(min) границу числового диапазона.

const randomGen = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export default randomGen;
