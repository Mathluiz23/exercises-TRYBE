//Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false .






let a = 2;
let b = 4;
let c = 1;

let valor = false;

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0){
  valor = true;
}

console.log(valor);
