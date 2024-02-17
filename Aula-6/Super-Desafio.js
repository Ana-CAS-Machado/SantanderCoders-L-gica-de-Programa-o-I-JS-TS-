function rolarDado() {
 return Math.floor(Math.random() * 6) + 1;
}
function simularRolagemDados() {
 let rolagens = []; 
 let soma = 0; 
 for (let i = 0; i < 2; i++) {
     let resultado = rolarDado(); 
     rolagens.push(resultado); 
     soma += resultado; 
 }
 console.log("Rolagens individuais:");
 console.log(rolagens.join(", ")); 
 console.log("Soma dos valores:", soma);
}
simularRolagemDados();