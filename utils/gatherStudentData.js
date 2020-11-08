const findData = require('./findData');
const regexStore = require('./regexStore');

const gatherStudentData = (string) => {
  let block = string
    .replace(/BLOCO II/, 'BLOCO 2')
    .replace(/BLOCO I/, 'BLOCO 1')
    .match(/BLOCO ([1-2])/g)
    .map((el) => el.replace('BLOCO ', ''));

  let object = {
    block,
  };

  for (key in regexStore) {
    object[key] = findData(string, regexStore[key]);
  }

  return object;
};

module.exports = gatherStudentData;
