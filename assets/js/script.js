const ANIMALS_CONFIG = [
  {
    name: "Elephant",
    imageFileName: 'elephant.png'
  },
  {
    name: "fox",
    imageFileName: 'fox.png'
  },
  {
    name: "lion",
    imageFileName: 'lion.png'
  },
  {
    name: "raccoon",
    imageFileName: 'raccoon.png'
  },
  {
    name: "Owl",
    imageFileName: 'Owl.png'
  },
  {
    name: "sheep",
    imageFileName: 'sheep.png'
  },
  {
    name: "squirrel",
    imageFileName: 'squirrel.png'
  },
  {
    name: "Turtle",
    imageFileName: 'Turtle.png'
  },
];


function startGame () {
  displayAnimals();  
  addEventListenersToCard();      
}

function addEventListenersToCard() {
  document.querySelectorAll('.card').forEach(function(card){
    card.addEventListener("click", flipCard);
  });
}

function displayAnimals() {
  let animalsList = [...ANIMALS_CONFIG, ...ANIMALS_CONFIG];
  animalsList = shuffleArray(animalsList);

  let animalsHTML = '';
  animalsList.forEach(eachAnimal => {
    animalsHTML += `<div class="card-face card">
                   <img src="assets/images/${eachAnimal.imageFileName}" alt="${eachAnimal.name}">
              </div>`;
  });

  document.getElementById('game-container').innerHTML = animalsHTML;
}

function shuffleArray(array){
  return array.sort( () => .5 - Math.random() );
}

function flipCard() {
  let hasFlippedCard = false ; 
  let firstCard , secondCard ;
  
  this.classList.toggle("flipped");
  
  if (!hasFlippedCard){

    hasFlippedCard = true ;
    firstCard = this;
    return;
  } 
   secondCard = this ;
   hasFlippedCard = false;
   checkForMatch();
  };
  


function cardsMatched(){
   
   let score = 0;
 
  if(selectedCard.matched || selectedCards.length === 2 ){
    
    // if two cards are matched 
     if (matchedCard==8){// if matched value is 8 that menans user has matched all the cards 
      score +=1;// increment matched value by one
      // If yes, do nothing and increment score
      firstCard.classList.add('match');
      secondCard.classList.add('match');
     }
    return console.log('Card Matched');
     } else{
       setTimeout(()=> {
       firstCard.classList.remove('no-match');
       secondCard.classList.remove('no-match');
          console.log('card Not Matched');
     },100 );
  }
}

   
  
   
   
   
// Store card which was clicked first
     // Wait for 2nd click
  // On 2nd click check if both card animal matches
// Else, flip back both cards


function cardUnmatched(){

}

function resetCards () {

}

function restartGame() {
   
}

function allCardsmatched(){

}

 startGame()