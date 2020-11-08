const findData = require('./findData');
const regexStore = require('./regexStore');

const gatherStudentData = (string) => {
  let object = {};

  for (key in regexStore) {
    object[key] = findData(string, regexStore[key]);
  }

  return object;
};

module.exports = gatherStudentData;
