const regexStore = {
  year: /ANO LETIVO ([0-9]{4})\n/,
  birthdate: /DATA NASC.* ([0-9/]+)\n/,
  city: /NATURALIDADE: (.*)\n/,
  state: /UF: (.*)\n/,
  sex: /SEXO: (.*)\n/,
  schoolYear: /SÉRIE: ([1-3]).*\n/,
  shift: /TURNO: (.*)\n/,
  group: /TURMA: (.*)\n/,
  name: /ESTUDANTE: (.*)\n/,
  code: /COD: (.*)\n/,
};

module.exports = regexStore;
