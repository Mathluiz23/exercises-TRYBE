let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {                // for/in percorre a posição retorno a posição do array
  console.log(index, cars[index]);       //.. resultado 0,1,2  identifica a posição
}



let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);                          // for/of retorna a descrição de cada posição e não o índice da posição
};
//resultado: hamburguer, bife, acarajé;