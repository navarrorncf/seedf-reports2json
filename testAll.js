const test = require('./test/test');
const jsonFile = require('./output/output.json');

for (object of jsonFile) {
  test(object);
}

console.log('\nALL DONE!\n');
