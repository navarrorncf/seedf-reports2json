const chainPromises = (array, accumulatorFn, startingValue) => {
  return array.reduce((acc, cur) => {
    return acc.then((acc) => accumulatorFn(cur, acc));
  }, Promise.resolve(startingValue));
};

module.exports = chainPromises;
