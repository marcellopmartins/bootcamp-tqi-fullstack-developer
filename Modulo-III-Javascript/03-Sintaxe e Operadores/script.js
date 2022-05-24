comparaNumeros();

function comparaNumeros() {
  var numero1 = Number(prompt('Digite um número: '));
  var numero2 = Number(prompt('Digite outro número: '));

  while (!numero1 || !numero2) {
    numero1 = Number(prompt('Digite entradas válidas! \n Digite um número: '));
    numero2 = Number(prompt('Digite outro número: '));
  }

  let ig;
  numero1 == numero2 ? (ig = "são"):(ig = "não são");

  let or1;
  let or2;
  numero1 + numero2 < 10 ? (or1 = "menor que") && (or2 = "menor que"): 
  numero1 + numero2 > 20 ? (or1 = "maior que") && (or2 = "maior que"): 
  numero1 + numero2 == 10 ? (or1 = "igual a") && (or2 = "menor que"): 
  numero1 + numero2 == 20 ? (or1 = "menor que") && (or2 = "igual a"): (or1 = "maior que") && (or2 = "menor que");

  const soma = numero2 + numero1;

  alert("Os números " + ig +" iguais! A soma dos números é " + soma + ", que é " + or1 + " 10 e " + or2 + " 20.")

  var nova = prompt("Deseja fazer mais uma comparação? \n 1-Sim \n 2-Não");

  while (nova != 2 && nova != 1) {
    var nova = prompt("Digite uma opção válido!! \n Deseja fazer mais uma comparação? \n 1-Sim \n 2-Não");
  }

  nova == 1 ? comparaNumeros(): alert("Até mais!");
}