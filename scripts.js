let valid = 0;
let contador = 0;
let qtdCards;
let carta_certa;
let carta_certa2;
let cont_click = 0;
let carta1_indice;
let x = 0;
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

for (let index = 0; index < qtdCards/2; index++) {
    gifsAuxs.push(gifs[index]);
    gifsAuxs.push(gifs[index]);
}

gifsAuxs.sort(comparador);

const cardsContainer = document.querySelector('.card_container');

function addCards(){
    for(let i = 0; i < qtdCards; i++){
        cardsContainer.innerHTML += 
            `<div class="card" onclick="virar(${i})">
                <div class="frente">
                    <img src="./img/front.png" alt="">
                </div>

                <div class="fundo apagado" >
                    <img src="${gifsAuxs[i]}" alt="">
                </div>
            </div>`;
    }
  DOM_cards = document.querySelectorAll('.card');
}
addCards();


function virar(indice){
    if(cont_click == 0){
        carta_certa = virar_f(indice);
        cont_click =1; 
        carta1_indice = indice;
    }

    else if(cont_click == 1){
        carta_certa2 = gifsAuxs[indice];
        let virar_frente2 = DOM_cards[indice].querySelector('.frente');
        let virar_fundo2 = DOM_cards[indice].querySelector('.fundo');
        virar_fundo2.classList.remove("apagado");
        virar_frente2.classList.add("apagado"); 
        cont_click = 0;
        if(carta_certa != carta_certa2){
            setTimeout(function(){
                virar_fundo2.classList.add("apagado");
                virar_frente2.classList.remove("apagado");
                desvirar_f(carta1_indice);
                
            },1000);
        }
    }
    
}

function virar_f(indice){
    let virar_frente = DOM_cards[indice].querySelector('.frente');
        let virar_fundo = DOM_cards[indice].querySelector('.fundo');
        virar_fundo.classList.remove("apagado");
        virar_frente.classList.add("apagado");

    return gifsAuxs[indice];
}


function desvirar_f(indice){
    let virar_frente = DOM_cards[indice].querySelector('.frente');
        let virar_fundo = DOM_cards[indice].querySelector('.fundo');
        virar_fundo.classList.add("apagado");
        virar_frente.classList.remove("apagado");
}


function comparador() { 
	return Math.random() - 0.5; 
}  
