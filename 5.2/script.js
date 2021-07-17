const criaElementH1 = document.createElement('h1');
criaElementH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(criaElementH1);


const criaMain = document.createElement('main');
criaMain.className = 'main-content';
document.body.appendChild(criaMain);

const criaSeccao = document.createElement('section');
criaSeccao.className = 'center-content';
criaMain.appendChild(criaSeccao);

const criaSeccao2 = document.createElement('section');
criaSeccao2.className = 'left-content';
criaMain.appendChild(criaSeccao2);

const criaSeccao3 = document.createElement('section');
criaSeccao3.className = 'right-content';
criaMain.appendChild(criaSeccao3);

const elementImg = document.createElement('img');
elementImg.className = 'small-image';
elementImg.src = 'https://www.amigododesigner.com.br/wp-content/uploads/2018/07/post-12-Como-n%C3%A3o-ter-problemas-com-direitos-autorais-em-suas-artes-01-380x250.png';
criaSeccao2.appendChild(elementImg);
