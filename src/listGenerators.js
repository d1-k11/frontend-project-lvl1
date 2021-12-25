export const genListOfQuestions = (genQuestion, counter = 0) => {
  const maxCount = 2;
  const result = genQuestion();
  if (counter === maxCount) {
    return result;
  }
  return [result].concat(genListOfQuestions(genQuestion, counter + 1));
};

export const genListOfAnswers = (getAnswer, questions) => {
  const maxCount = 3;
  const result = [];
  for (let i = 0; i < maxCount; i += 1) {
    result.push(getAnswer(questions[i]));
  }
  return result;
};
