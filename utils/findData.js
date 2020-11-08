const findData = (string, regex) => {
  try {
    return string.match(regex)[1];
  } catch (e) {
    if (/Cannot read property/.test(e.stack)) {
      const msg = `Could not find a match for regex ${regex}\nPlease, check your code and/or your pdf file`;
      throw new ReferenceError(msg);
    }
  }
};

module.exports = findData;
