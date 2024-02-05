// Crie um vetor (array) chamado notas com as notas de um aluno em três
// disciplinas. Em seguida, calcule a média das notas usando a fórmula matemática
// da média aritmética.
// Vetor (array) de notas
const notas = [8.5, 7.0, 9.2];
const somaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
const media = somaNotas / notas.length;

console.log(`Notas: ${notas}`);
console.log(`Média: ${media.toFixed(2)}`);
