const vetorX = [2, 3, 5];
const vetorY = [1, 4, 6];
function produtoEscalar(vetor1, vetor2) {
  if (vetor1.length !== vetor2.length) {
    throw new Error("Os vetores devem ter o mesmo comprimento.");
  }
  let resultado = 0;
  for (let i = 0; i < vetor1.length; i++) {
    resultado += vetor1[i] * vetor2[i];
  }
  return resultado;
}
const resultado = produtoEscalar(vetorX, vetorY);
console.log(`Vetor X: [${vetorX}]`);
console.log(`Vetor Y: [${vetorY}]`);
console.log(`Produto Escalar: ${resultado}`);