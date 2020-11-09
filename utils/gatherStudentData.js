const regexStore = require('./regexStore');

const cleanString = require('./cleanString');
const findData = require('./findData');
const gatherGradesAttendance = require('./gatherGradesAttendance');

const gatherStudentData = (string) => {
  try {
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
  } catch (e) {
    console.log('No Student data found in this part of the file!');
    console.log(e);
  }

  return {};
};

module.exports = gatherStudentData;
