// Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
//Bonus: use somente um if .


let a = 1;
let b = 3;
let c = 5;

let valor = false;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
  valor = true;
}

console.log(valor);
