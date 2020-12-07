const logError = require('./logError');

const testCode = (object) => {
  let code = object.code,
    isString = typeof code === 'string',
    length = code.length,
    isNumber = !isNaN(code * 1);

  if (!isString || !length >= 5 || !isNumber) {
    logError('texto', 'code', object);
  }
};

module.exports = testCode;
