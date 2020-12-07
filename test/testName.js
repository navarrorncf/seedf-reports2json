const logError = require('./logError');

const testName = (object) => {
  let name = object.name,
    isString = typeof name === 'string',
    length = name.length,
    hasLettersOnly = !/[0-9\-]/.test(name);

  if (!isString || !length >= 10 || !hasLettersOnly) {
    logError('texto', 'name', object);
  }
};

module.exports = testName;
