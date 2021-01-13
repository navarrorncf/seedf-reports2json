const { shorten } = require('./abbreviations');

const gatherGradesAttendance = (string) => {
  const cleanArray = string.split('\n').filter((el) => el !== '');

  const subjects = cleanArray
    .filter((el) => el.length > 1 && isNaN(el))
    .filter((el) => !/REP\**/.test(el))
    .map((el) => shorten[el]);

  const splitSubjects = string
    .split(/[^0-9\-]+\n/)
    .filter((el) => el !== '')
    .map((el) => el.split('\n'))
    .map((el) => el.slice(0, 4));

  const subjectsArray = subjects
    .map((el, i) => ({
      [el]: splitSubjects[i],
    }))
    .filter(
      (el) => !/enr/.test(Object.keys(el)[0]) && !/pd4/.test(Object.keys(el)[0])
    );

  const subjectsObject = subjectsArray.reduce((acc, cur) => {
    let key = Object.keys(cur)[0];
    if (acc[key]) {
      return Object.assign(acc, { [key]: acc[key].concat(cur[key]) });
    } else {
      return Object.assign(acc, cur);
    }
  }, {});

  return subjectsObject;
};

module.exports = gatherGradesAttendance;
