const notas = [8, 9, 7, 5, 10, 6];
const menorNota = Math.min(...notas);
const maiorNota = Math.max(...notas);
const notasFiltradas = notas.filter(nota => nota !== menorNota && nota !== maiorNota);
const somaNotas = notasFiltradas.reduce((soma, nota) => soma + nota, 0);
const media = somaNotas / notasFiltradas.length;

console.log("Notas:", notas);
console.log("Notas filtradas:", notasFiltradas);
console.log("Média (ignorando a nota mais baixa e mais alta):", media);
