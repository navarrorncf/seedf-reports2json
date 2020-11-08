const cleanString = (string) =>
  string
    .split(/COD:.*\n/)[1]
    .split(/Projeto.*ofertado.*\n[0-9/]+\n/)[0]
    .replace(/EM Pr\.\n/g, '')
    .replace(/Nota\n/g, '')
    .replace(/Faltas\n/g, '')
    .replace(/BLOCO I+\n/g, '')
    .replace(/-{2,}/g, '-')
    .replace(/\nAP\n/g, '\n')
    .replace(/\nRC\n/g, '\n')
    .replace(/\nC\.C\n/g, '\n')
    .replace(/\nResultado\n/g, '\n')
    .replace(/[1-4].*Bimestre\n/g, '\n')
    .replace(/Situa..o.*\n/g, '')
    .replace(/\n{2,}/gm, '\n');

module.exports = cleanString;
