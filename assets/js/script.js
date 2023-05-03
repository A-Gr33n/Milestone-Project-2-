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

function flipCard() {
  // Store card which was clicked first
  if (storeCard) return;
  if (this === firstCard) return;
  
  this.classList.toggle("flipped");

  // Wait for 2nd click
  second = this;
  score++
  document.querySelector(".score").textContent = score ; 
  storeCard = true;
  // On 2nd click check if both card animal matches
  checkForMatch();
  
  if (! firstCard) {
    firstClick= card.getAttribute("animal");
     return;
    // If yes, do nothing and increment score
    
  }
 
   else {
       
      // Else, flip back both cards
   }
}


function shuffleArray(array){
  return array.sort( () => .5 - Math.random() );
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

startGame();