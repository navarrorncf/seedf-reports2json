const jsonFile = require('./output/output.json');

console.log('Array length: ', jsonFile.length);
const turmas = new Set();
for (object of jsonFile) {
  turmas.add(object.group);
}

// console.log(turmas);
for (turma of turmas) {
  console.log(turma, jsonFile.filter((el) => el.group === turma).length);
}
