const dicionarioDeSinonimos = new Map();
dicionarioDeSinonimos.set("feliz", ["alegre", "contente", "satisfeito"]);
dicionarioDeSinonimos.set("triste", ["melancólico", "abatido", "deprimido"]);
dicionarioDeSinonimos.set("bom", ["ótimo", "excelente", "maravilhoso"]);
console.log(dicionarioDeSinonimos.get("feliz"));
console.log(dicionarioDeSinonimos.get("triste")); 
console.log(dicionarioDeSinonimos.get("bom")); 