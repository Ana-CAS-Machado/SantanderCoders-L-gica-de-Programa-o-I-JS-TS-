const matriz = [
 [2, 5],
 [3, 7],
];
const det = (matriz[0][0] * matriz[1][1]) - (matriz[0][1] * matriz[1][0]);

console.log(`Matriz:`);
matriz.forEach(row => console.log(row));
console.log(`Determinante: ${det}`);
