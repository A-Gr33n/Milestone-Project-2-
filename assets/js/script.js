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

let lockDeck = false;
let firstCard, secondCard
let moves = 0

function flipCard() {
  
    this.classList.toggle("flipped");
  };

  const cards = document.querySelectorAll('.card');
  
  function checkForMatch(){ 
   
 if (firstCard.dataset.imageFileName === secondCard.dataset.imageFileName){
        incrementScore();
        alert("Good job, it's a match!");
    } else {
        flipCardsBack();
        alert("ah sorry no match, try again")
    }
    
  };

  function disableCards() {
    firstCard.removeEventListener('click' , flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetCards();
  }
 
  function flipCardsBack() {
     lockDeck = true;
     
     setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetCards();
   } , 100);
  }
  
    
  
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetGame);

function resetGame () { 
   [lockDeck]=[false,false];
   [firstCard, secondCard]=[null, null];

   const cards = document.querySelectorAll(".card");
   cards.forEach((card) =>{
     card.classList.remove("show");
     card.classList.remove("matched");
   }) ;
 }
 
 cards.forEach(card => card.addEventListener('click', flipCard));

 function stopGame (){
  }

function allCardsmatched(){

}

 startGame()   // if two cards are matched 
     // if matched value is 8 that menans user has matched all the cards 
        // increment matched value by one
      // If yes, do nothing and increment score
     // Store card which was clicked first
     // Wait for 2nd click
  // On 2nd click check if both card animal matches
// Else, flip back both cards