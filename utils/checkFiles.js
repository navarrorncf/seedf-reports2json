const fs = require('fs');
const path = require('path');

const allFiles = fs.readdirSync(path.join(__dirname, '..', 'pdf_files'));

module.exports = allFiles;
