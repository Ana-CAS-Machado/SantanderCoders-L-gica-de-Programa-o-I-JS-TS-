const frutas = new Map([
 ["maçã", 2.5],
 ["banana", 1.8],
 ["pêra", 2.0],
 ["uva", 2.0]
]);
const macaMaisCaraQueBanana = frutas.get("maçã") > frutas.get("banana");
console.log("A maçã é mais cara que a banana?", macaMaisCaraQueBanana);
const peraNaoCustaMesmoQueUva = frutas.get("pêra") !== frutas.get("uva");
console.log("A pêra não custa o mesmo que a uva?", peraNaoCustaMesmoQueUva);
