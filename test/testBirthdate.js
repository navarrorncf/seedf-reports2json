const logError = require('./logError');

const testBirthdate = (object) => {
  let birthdate = object.birthdate,
    isString = typeof birthdate === 'string',
    length = birthdate.length || 0,
    hasDateFormat = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/.test(birthdate);

  if (!isString || !length === 10 || !hasDateFormat) {
    logError('texto', 'birthday', object);
  }
};

module.exports = testBirthdate;
