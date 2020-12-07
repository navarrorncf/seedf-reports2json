const testSubjects = require('./testSubjects');
const testBlock = require('./testBlock');
const testYear = require('./testYear');
const testBirthdate = require('./testBirthdate');
const testSchoolYear = require('./testSchoolYear');
const testGroup = require('./testGroup');
const testName = require('./testName');
const testCode = require('./testCode');

const test = (object) => {
  testSubjects(object);
  testBlock(object);
  testYear(object);
  testBirthdate(object);
  testSchoolYear(object);
  testGroup(object);
  testName(object);
  testCode(object);
};

module.exports = test;
