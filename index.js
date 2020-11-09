const fs = require('fs');
const path = require('path');
const {
  chainPromises,
  checkFiles,
  pdfToText,
  storeData,
  splitText,
  splitFirstSubject,
  gatherStudentData,
} = require('./utils');

Promise.all(
  checkFiles.map((fileName) => {
    return pdfToText(path.join(__dirname, 'pdf_files', fileName));
  })
)
  .then((longString) => {
    return splitText(longString.join(''))
      .map((el) => splitFirstSubject(el))
      .map((el) => gatherStudentData(el));
  })
  .then((objectsArray) => chainPromises(objectsArray, storeData, []))
  .then((dataStructure) => {
    const cleanArray = dataStructure.filter(
      (el) => Object.keys(el).length !== 0
    );

    fs.writeFileSync(
      path.join(__dirname, 'output', 'output.json'),
      JSON.stringify(cleanArray)
    );
  })
  .catch((err) => console.log('DEU RUIM', err));
