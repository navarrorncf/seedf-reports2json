const fs = require('fs');
const pdf = require('pdf-parse');

const pdfToTxt = (pathToPdfFile) => {
  return new Promise((resolve, reject) => {
    const dataBuffer = fs.readFileSync(pathToPdfFile);

    pdf(dataBuffer).then((txt) => {
      resolve(txt.text);
    });
  });
};

module.exports = pdfToTxt;
