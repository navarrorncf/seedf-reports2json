const { shorten } = require('./abbreviations');

const dummyText = require('./splitFirstSubject')(
  require('../dev_data/sampleStudentReport')
);
const cleanString = require('./cleanString')(dummyText);

const cleanArray = cleanString.split('\n').filter((el) => el !== '');

const subjects = cleanArray
  .filter((el) => el.length > 1 && isNaN(el))
  .map((el) => shorten[el]);

let splitSubjects = cleanString
  .split(/[^0-9\-]+\n/)
  .filter((el) => el !== '')
  .map((el) => el.split('\n'))
  .map((el) => el.slice(0, 4));

const subjectsArray = subjects
  .map((el, i) => ({
    [el]: splitSubjects[i],
  }))
  .filter(
    (el) => !/ENR/.test(Object.keys(el)[0]) && !/PD4/.test(Object.keys(el)[0])
  );

const subjectsObject = subjectsArray.reduce((acc, cur) => {
  let key = Object.keys(cur)[0];
  if (acc[key]) {
    return Object.assign(acc, { [key]: acc[key].concat(cur[key]) });
  } else {
    return Object.assign(acc, cur);
  }
}, {});

const gatherGradesAttendance
console.log(subjectsObject);
