const idades = [15, 22, 17, 20, 30, 12];
const maiorOuIgualA18 = idade => idade >= 18;
const indicesMaioresOuIgualA18 = idades.reduce((indices, idade, indice) => {
  if (maiorOuIgualA18(idade)) {
    indices.push(indice);
  }
  return indices;
}, []);

console.log("Idades:", idades);
console.log("Índices dos elementos maiores ou iguais a 18:", indicesMaioresOuIgualA18);
