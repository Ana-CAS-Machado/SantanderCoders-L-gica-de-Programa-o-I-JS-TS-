const nomes = ["Alice", "Bob", "Eva", "John", "Daniel", "Isabel"];
const temCincoLetrasOuMais = nome => nome.length >= 5;
const nomesComCincoLetrasOuMais = nomes.filter(temCincoLetrasOuMais);

console.log("Nomes originais:", nomes);
console.log("Nomes com 5 letras ou mais:", nomesComCincoLetrasOuMais);