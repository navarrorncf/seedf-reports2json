const logError = require('./logError');

const testYear = (object) => {
  const year = object.year;

  if (typeof year !== 'string' || year.length !== 4 || isNaN(year * 1)) {
    logError('texto', 'year', object);
  }
};

module.exports = testYear;
