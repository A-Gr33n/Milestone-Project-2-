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

const cards = document.querySelectorAll('.card');
cards.forEach(card => card.addEventListener('click', flipCard));

 function flipCard() {
  
    this.classList.toggle("flipped");
  };
   
  // Variables to store the currently selected cards
  let firstCard = null ;
  let secondCard = null;
  let lockDeck = false;
   let moves = 0

   for (let card of cards){
     card.addEventListner('click', checkForMatch)
   }

 function checkForMatch(){ 
    const cardIsClicked = 

    // Flip the card
     cardIsClicked.classList.add('flipped')
     
    if (!firstCard) {
        // First card selected
        firstCard = cardIsClicked
     }
     // Store card which was clicked first

     // Wait for 2nd click
      else if (!secondCard) {
        // Second card selected 
        secondCard = cardIsClicked
      }
   
      // Check if the cards match
    if (firstCard.dataset.imageFileName == secondCard.dataset.imageFileName('matched')){
       
        // if two cards are matched 
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
          // If yes, do nothing and increment score
        incrementScore();
        alert("Good job, it's a match!");
        return console.log('Card Matched');
     } 
     else {
        // if two cards don't match
        // Else, flip back both cards
        flipCardsBack();
        alert("ah sorry no match, try again")
    }
    
  };

  function incrementScore(){
    document.querySelectorByClassName('score')
    // increment matched value by one
    eachScore = 1; 
  }

  function disableCards() {
    firstCard.removeEventListener('click' , flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetCards();
  }
 
  function flipCardsBack() {
     lockDeck = true;
     
     setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flippped');
        resetCards();
   } , 100);
  }
  
  function setup() {
   const resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", resetGame);  
  }
    
function resetGame() { 
    document.querySelectorAll(".card").forEach((card)=>{
      card.classList.remove("flipped");
    })
 }
 
 function allCardsmatched(){
// if matched value is 8 that menans user has matched all the cards 

}

 startGame()   
     
        
    
     
  // On 2nd click check if both card animal matches
