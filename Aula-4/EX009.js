const mes = prompt("Digite o nome do mês:").toLowerCase();

switch (mes) {
  case 'dezembro':
  case 'janeiro':
  case 'fevereiro':
    console.log("Inverno");
    break;
  case 'março':
  case 'abril':
  case 'maio':
    console.log("Primavera");
    break;
  case 'junho':
  case 'julho':
  case 'agosto':
    console.log("Verão");
    break;
  case 'setembro':
  case 'outubro':
  case 'novembro':
    console.log("Outono");
    break;
  default:
    console.log("Mês inválido");
}
