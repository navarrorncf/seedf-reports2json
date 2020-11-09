// TODO: Add documentation
const splitFirstSubject = (str) => {
  const match = str.match(/(COD).*?([0-9]+)(.*)\n/);

  if (!match) {
    return '';
  }

  return str.replace(match[0], `${match[1]}: ${match[2]}\n${match[3]}\n`);
};

module.exports = splitFirstSubject;
