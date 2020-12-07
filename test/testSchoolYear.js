const logError = require('./logError');

const testSchoolYear = (object) => {
  let schoolYear = object.schoolYear;

  if (!/[1-3]/.test(schoolYear)) {
    logError('texto', 'schoolYear', object);
  }
};

module.exports = testSchoolYear;
