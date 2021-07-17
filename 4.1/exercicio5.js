//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let cateto1 = 60;
let cateto2 = 60;
let cateto3 = -90;

let somaangle = cateto1 + cateto2 + cateto3;
let anglepositivo = (cateto1 > 0 && cateto2 > 0 && cateto3 > 0);


if (anglepositivo) {
  if(somaangle === 180){
    console.log('true');
  } else {
    console.log('false');
  } 
} 
else {
  console.log('Erro:ângulo inválido');
}
