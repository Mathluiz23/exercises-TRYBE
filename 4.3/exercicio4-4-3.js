let n = 5;


for (let indexLinhas = 0; indexLinhas < n; indexLinhas += 2) {
  resultado = "";
  
  for (let indexVazios = 1; indexVazios < (n - indexLinhas); indexVazios += 2) {
    resultado = resultado + " ";
  }

  for (let asterisco = (n + indexLinhas); asterisco > (n - 1); asterisco -= 1) {
    resultado = resultado + '*';
  }
  console.log(resultado)
}

