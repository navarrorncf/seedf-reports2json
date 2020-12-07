const logError = require('./logError');

const testGroup = (object) => {
  let group = object.group,
    isString = typeof group === 'string',
    length = group.length,
    hasLettersOnly = !/[0-9\-]/.test(group);

  if (!isString || !length >= 3 || !hasLettersOnly) {
    logError('texto', 'group', object);
  }
};

module.exports = testGroup;
