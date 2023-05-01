const cards = document.querySelectorAll('.card') ; 

function flipCard() {
    this.classList.toggle("flipped");
   
   }
   
   cards.forEach(function(card){
     card.addEventListener("click", flipCard);
   
    
   });



function startGame () {
}

function cardMatched(){
   
}



function cardUnmatched(){

}

function resetCards () {

}

function restartTime() {
   
}

function allCardsmatched(){

}