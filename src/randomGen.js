// я протестировал данный генератор, он включает в выдачу как
// верхнюю(max) так и нижнюю(min) границу числового диапазона.

const genRandomNum = (min, max) => {
  const randomNum = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNum);
};

export default genRandomNum;
