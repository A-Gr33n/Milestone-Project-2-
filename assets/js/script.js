const cards = document.querySelectorAll('.card') ; 

function startGame () {
}

function flipCard() {
    this.classList.toggle("flipped");
   
   }
   // Pair of cards will flip when clicked 
   cards.forEach(function(card){
     card.addEventListener("click", flipCard);
   
    
   });


function shuffleArray(array){
  // Array of animal cards 
  const animals = ['elephant', 'fox' ,'lion', 'owl', 'raccoon', 'sheep', 'squirrel' ,'turtle'] ; 
   
   let animal = animals.length; 
 
   // Randomize array to shuffle cards every new play
  for (var i = animal.length -1; i > 0; i--)  {
     Math.floor(math.random()*(i+1)) ;
  }
    return array;
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