const logError = (type, name, object) => {
  console.log(
    `Objeto inconsistente\nProblemas no ${type} >${name}<\n`,
    object,
    '\n---------------------------------------\n'
  );
};

module.exports = logError;
