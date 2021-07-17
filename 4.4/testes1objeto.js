let pizzas = {
  sabor:"Calabresa",
  preco: 60.10,
  bordaChocolate: true

};

for (let key in pizzas) {
  console.log(pizzas[key]);
}

let pizzasDoces = ['chocolate', 'banana', 'morango'];

for (let key in pizzasDoces) {
  console.log(key, pizzasDoces[key]); // desta forma irá mostrar o indíce do array e o valor correspondente ao índice  
}



