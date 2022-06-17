let valid = 0;
let contador = 0;
let  qtdCards;
while(valid == 0){
    qtdCards = Number(prompt('Com quantas cartas quer jogar? (apenas números pares entre 4 e 14)'));
    if(qtdCards % 2 == 0 && qtdCards >= 4 && qtdCards <=14 ) valid = 1;
}  

const gifs = [  'imgs/bobrossparrot.gif',
                'imgs/explodyparrot.gif',
                'imgs/fiestaparrot.gif',
                'imgs/metalparrot.gif',
                'imgs/revertitparrot.gif',
                'imgs/tripletsparrot.gif',
                'imgs/unicornparrot.gif' ];
const gif_index = [6];


const cardsContainer = document.querySelector('.card_container');

function addCards(){
    for(let i = 0; i < qtdCards; i++){
        cardsContainer.innerHTML += 
            `<div class="card">
                <div class="frente">
                    <img src="./img/front.png" alt="">
                </div>

                <div class="fundo apagado" >
                    <img src="./img/front.png" alt="">
                </div>
            </div>`;
    }
}
addCards();







function comparador() { 
	return Math.random() - 0.5; 
}  
