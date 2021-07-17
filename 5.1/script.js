window.onload

function mudaTexto() {
  let texto = document.getElementsByTagName('p')[1];
texto.innerHTML = "Como eu me vejo daqui a 2 anos";
  let texto_2 = document.getElementsByTagName('p')[2];
texto_2.innerHTML = "Sou TRYBEEEER";
}
mudaTexto();

function mudaCorFundo() {
  let corFundo = document.getElementsByClassName('main-content')[0];
   corFundo.style.background = "rgb(0,164,109)";
}
mudaCorFundo();
