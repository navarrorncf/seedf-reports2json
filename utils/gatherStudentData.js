const regexStore = require('./regexStore');

const cleanString = require('./cleanString');
const findData = require('./findData');
const gatherGradesAttendance = require('./gatherGradesAttendance');

const gatherStudentData = (string) => {
  let block = string
    .replace(/BLOCO II/, 'BLOCO 2')
    .replace(/BLOCO I/, 'BLOCO 1')
    .match(/BLOCO ([1-2])/g)
    .map((el) => el.replace('BLOCO ', ''));

  let object = {
    block,
    grades: gatherGradesAttendance(cleanString(string)),
  };

  for (key in regexStore) {
    object[key] = findData(string, regexStore[key]);
  }

  return object;
};

module.exports = gatherStudentData;
