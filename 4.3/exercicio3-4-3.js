let n = 5;
let asterisco = '';
let vazio = '';

for (let index = 1; index <= n; index += 1) {
asterisco += '*';
for (let index2 = n - index; index2 > 0; index2 -= 1) {
vazio += ' ';
} 
console.log(vazio + asterisco);
vazio = '';
} 

// teste modelo 2

let asterisco = '*';
let n = 5;


for (let indexlinha = 1; indexlinha <=n; indexlinha += 1) {
  resultado = '';

  for (let vaziosNaLinha = n; vaziosNaLinha >=1 ; vaziosNaLinha -= 1){
    if (indexlinha<vaziosNaLinha){
      resultado = resultado + " ";
    }
    else{
      resultado = resultado + asterisco;
    }
  }
  console.log(resultado)
}
