function rolarDado(lados) {
 return Math.floor(Math.random() * lados) + 1; 
}
function simularRolagemDados(quantidadeDados, lados) {
 let rolagens = [];
 let soma = 0; 
 for (let i = 0; i < quantidadeDados; i++) {
     let resultado = rolarDado(lados);
     rolagens.push(resultado); 
     soma += resultado;
 }
 console.log("Rolagens individuais:");
 console.log(rolagens.join(", ")); 
 console.log("Soma dos valores:", soma);
}
const quantidadeDados = Number(prompt("Quantidade de dados:"));
const quantidadeLados = Number(prompt("Quantidade de lados:"));
simularRolagemDados(quantidadeDados, quantidadeLados);