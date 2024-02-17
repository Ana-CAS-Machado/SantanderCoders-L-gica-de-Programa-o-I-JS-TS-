function rolarDado(lados) {
    return Math.floor(Math.random() * lados) + 1; 
}
function simularRolagemDados(quantidadeDados, lados, tentativas) {
    for (let t = 0; t < tentativas; t++) {
        let rolagens = []; 
        let soma = 0; 
        for (let i = 0; i < quantidadeDados; i++) {
            let resultado = rolarDado(lados); 
            rolagens.push(resultado); 
            soma += resultado;
        }
        console.log(`Rolagens na tentativa ${t + 1}:`);
        console.log(rolagens.join(", ")); 
        console.log("Soma dos valores na tentativa", t + 1 + ":", soma);
        console.log(); 
    }
}
const quantidadeDados = 3;
const quantidadeLados = 9;
const quantidadeTentativas = 3;
simularRolagemDados(quantidadeDados, quantidadeLados, quantidadeTentativas);