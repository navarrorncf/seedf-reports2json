const logError = require('./logError');

const testBlock = (object) => {
  const blocks = ['1', '2'],
    block = object.block,
    isArray = Array.isArray(block),
    hasLength2 = block.length === 2,
    hasExpectedValues = blocks.includes(block[0]) && blocks.includes(block[1]);

  if (!block || !isArray || !hasLength2 || !hasExpectedValues) {
    logError('array', 'blocks', object);
  }
};

module.exports = testBlock;
