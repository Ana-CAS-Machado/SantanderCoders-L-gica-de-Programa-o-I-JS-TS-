const dicionarioDeSinonimos = {
 feliz: ["alegre", "contente", "satisfeito"],
 triste: ["melancólico", "abatido", "deprimido"],
 bom: ["ótimo", "excelente", "maravilhoso"]
};
function encontrarSinonimos(palavra) {
 if (dicionarioDeSinonimos[palavra]) {
     return dicionarioDeSinonimos[palavra];
 } else {
     return "Palavra não encontrada no dicionário de sinônimos";
 }
}
console.log(encontrarSinonimos("feliz")); 
console.log(encontrarSinonimos("triste")); 
console.log(encontrarSinonimos("bom")); 
console.log(encontrarSinonimos("alegre"));
