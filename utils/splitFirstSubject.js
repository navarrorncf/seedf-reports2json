const str = 'COD.: 969407Biologia\n';
const str2 = `ANO LETIVO 2020
DATA NASC.: 21/07/2005
NATURALIDADE: SAO LUIS
UF: MA
SEXO: F
SÉRIE: 1ª Série
TURNO: Vespertino
TURMA: Argentina

ESTUDANTE: ANA BEATRIZ BARROS CARDOSO
COD.: 969407Biologia
5
14
6.19
6
5.5
20
AP
Educação Física
7.5
4
9
0
EM Pr.
EM Pr.
EM Pr.
Ensino Religioso
-----
-----
-----
-----
-------
--------
Filosofia
5
12
7
0
6.0
12
AP
História
7.5
8
9
0
8.0
8
AP
Língua Estrangeira Moderna - Inglês
6
10
8.5
0
7.0
10
AP
Língua Portuguesa
9
10
9
2
EM Pr.
EM Pr.
EM Pr.
Matemática
2.8
12
8.2
0
EM Pr.
EM Pr.
EM Pr.
Projeto Interdisciplinar I
2.8
5
8.2
0
5.5
5
AP
Química
8.02
6
7.2
0
7.5
6
AP
Nota
Faltas
Faltas
Nota
Faltas
Nota
1.° Bimestre
2.° Bimestre
Resultado
BLOCO I
Situação no
C.C
Situação no
C.C
Faltas
Arte
-----
-----
-----
-----
-------
--------
-------
Educação Física
-----
-----
-----
-----
4.0
--------
-------
Ensino Religioso II
-----
-----
-----
-----
-------
--------
-------
Física
-----
-----
-----
-----
-------
--------
-------
Geografia
-----
-----
-----
-----
-------
--------
-------
Língua Estrangeira Moderna - Espanhol
-----
-----
-----
-----
-------
--------
-------
Língua Portuguesa
-----
-----
-----
-----
4.5
--------
-------
Matemática
-----
-----
-----
-----
3.0
--------
-------
Projeto Interdisciplinar II
-----
-----
-----
-----
-------
--------
-------
Projeto Interdisciplinar III
-----
-----
-----
-----
-------
--------
-------
Projeto Interdisciplinar IV
-----
-----
-----
-----
-------
--------
-------
Sociologia
-----
-----
-----
-----
-------
--------
-------
Faltas
3.° Bimestre
BLOCO II
Nota
Faltas
Nota
4.° Bimestre
Nota
Resultado
Projeto Interdisciplinar ofertado pela Unidade Escolar.
06/11/2020
Caso não haja opção pelo Ensino Religioso
o estudante deverá cursar um
Data de Emissão:Legenda: RC - Recuperação  Contínua (a nota será alterada no final do 2°. Semestre). Em Pr. - Componentes Currículares cuja carga horaria é ANUAL.   C.C - Componente Currícular.  AP- Aprovado. REP- Reprovado. D - Nota Diferenciada. Cons -Submetido ao Conselho de Classe.   REP**: Reprovado por Falta
ESTE DOCUMENTO NÃO É VALIDO PARA MATRÍCULA

CRE - Brazlândia
Centro de Ensino Médio 02 de Brazlândia`;

console.log(str2.match(/COD.*[0-9]+/)[0]);
console.log(str2.match(/COD.*?([0-9]+)(.*)\n/).slice(1, 3));
console.log(
  str2.replace(
    /COD\..*\n/,
    str2
      .match(/COD.*?([0-9]+)(.*)\n/)
      .slice(1, 3)
      .concat([''])
      .join('\n')
  )
);

// TODO: A function that takes a multiline string and splits the letters at the end of the line that contains numbers and starts with "COD."
