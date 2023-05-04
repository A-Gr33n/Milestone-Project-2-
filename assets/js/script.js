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

const cards = document.querySelector('.card');
  let firstCard , secondCard ; 

function flipCard(e) {
   // Store card which was clicked first
     // Wait for 2nd click
  // On 2nd click check if both card animal matches
  
      // If yes, do nothing and increment score
      // Else, flip back both cards
  let clickedCard =e.target ; 
  
  this.classList.toggle("flipped");
  
  if(!firstCard) {
     return firstCard = clickedCard;
  }

  let  firstCardImg = firstCard.querySelector(),
  

  firstCard= clickedCard;
  secondCard = clickedCard;
  console.log(firstCard, secondCard);
  
  };
  
function shuffleArray(array){
  return array.sort( () => .5 - Math.random() );
}

function cardMatched( ){
    console.log()
}



function cardUnmatched(){

}

function resetCards () {

}

function restartTime() {
   
}

function allCardsmatched(){

}

startGame();