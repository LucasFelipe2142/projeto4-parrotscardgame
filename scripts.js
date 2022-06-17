let valid = 0;
let contador = 0;
let qtdCards;
while(valid == 0){
    qtdCards = Number(prompt('Com quantas cartas quer jogar? (apenas números pares entre 4 e 14)'));
    if(qtdCards % 2 == 0 && qtdCards >= 4 && qtdCards <=14 ) valid = 1;
}  

let gifs = [    'img/bobrossparrot.gif',
                'img/explodyparrot.gif',
                'img/fiestaparrot.gif',
                'img/metalparrot.gif',
                'img/revertitparrot.gif',
                'img/tripletsparrot.gif',
                'img/unicornparrot.gif' ];

let gifsAuxs = [];

for (let index = 0; index < qtdCards; index++) {
    gifsAuxs.push(gifs[index]);
    gifsAuxs.push(gifs[index]);
}

gifsAuxs.sort(comparador);

const cardsContainer = document.querySelector('.card_container');

function addCards(){
    for(let i = 0; i < qtdCards; i++){
        cardsContainer.innerHTML += 
            `<div class="card">
                <div class="frente apagado">
                    <img src="./img/front.png" alt="">
                </div>

                <div class="fundo" >
                    <img src="${gifsAuxs[i]}" alt="">
                </div>
            </div>`;
    }
}
addCards();

function comparador() { 
	return Math.random() - 0.5; 
}  
