const logError = require('./logError');

const testSubjects = (object) => {
  const grades = object.grades,
    subjects = [
      'bio',
      'edf',
      'fil',
      'fis',
      'ing',
      'lp',
      'mat',
      'pd1',
      'qui',
      'art',
      'fis',
      'geo',
      'esp',
      'pd2',
      'pd3',
      'soc',
    ],
    arrayOK = (array) => {
      for (el of array) {
        if (!(!isNaN(el * 1) || el === '-')) {
          return false;
        }
      }
      return true;
    };

  if (!grades) {
    logError('object', 'grades', object);
  }

  for (subject of subjects) {
    let subjectData = grades[subject];

    if (!subjectData) {
      logError('array', `grades['${subject}']. Missing subject!`, object);
      return;
    }

    let length = subjectData.length;

    if (!subjectData) {
      logError('object', 'grades', object);
      return;
    } else if (!(length === 4 || length === 8) || !arrayOK(subjectData)) {
      logError('array', `grades['${subject}']`, object);
      return;
    }
  }
};

module.exports = testSubjects;
