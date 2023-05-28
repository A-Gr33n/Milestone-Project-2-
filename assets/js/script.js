const ANIMALS_CONFIG = [
  {
    id: "elephant",
    name: "Elephant",
    imageFileName: 'elephant.png'
  },
  {
    id: "fox",
    name: "fox",
    imageFileName: 'fox.png'
  },
  {
    id: "lion",
    name: "lion",
    imageFileName: 'lion.png'
  },
  {
    id: "raccoon",
    name: "raccoon",
    imageFileName: 'raccoon.png'
  },
  {
    id: "owl",
    name: "Owl",
    imageFileName: 'Owl.png'
  },
  {
    id: "sheep",
    name: "sheep",
    imageFileName: 'sheep.png'
  },
  {
    id: "squirrel",
    name: "squirrel",
    imageFileName: 'squirrel.png'
  },
  {
    id: "turtle",
    name: "Turtle",
    imageFileName: 'Turtle.png'
  },
];


 // Variables to store the currently selected cards
 let firstCard = null ;
 let secondCard = null;
 let lockDeck = false;
let moves = 0

// let noOfCardOpen 


function startGame () {
  displayAnimals();  
  addEventListenersToCard();  
  timerStart();  
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
                   <img src="assets/images/${eachAnimal.imageFileName}" alt="${eachAnimal.name}" data-id="${eachAnimal.id}">
              </div>`;
  });

  document.getElementById('game-container').innerHTML = animalsHTML;
}

function shuffleArray(array){
  return array.sort( () => .5 - Math.random() );
}

function flipCard(e) {
    e.target.classList.toggle('flipped'); 
    if(!firstCard) {
        firstCard = e.target;
    } else {
        secondCard = e.target;
    }
    
    if(firstCard && secondCard) {
        checkForMatch();
        incrementMoves();
    }

};

function checkForMatch() { 
    const firstCardId = firstCard.dataset.id;
    const secondCardId = secondCard.dataset.id;
    if(firstCardId === secondCardId) {
        incrementScore()
        firstCard = null;
        secondCard = null;
       
       setTimeout(()=>{
        alert("Good job, it's a match!");
       },500)

    } else {
        const timeoutRef = setTimeout(()=> {
            firstCard.classList.toggle('flipped'); 
            secondCard.classList.toggle('flipped'); 
            firstCard = null;
            secondCard = null;
            clearTimeout(timeoutRef);
            alert("ah sorry no match, try again");
        }, 1000)
    }

    
  };

  function incrementScore() {
     const scoreNode = document.getElementById('score');
    scoreNode.innerText = parseInt(scoreNode.innerText) + 1;
    // increment matched value by one
    // eachScore = 1; 
    
  } 

  function incrementMoves() {
     const moves = document.getElementById("moves-count");
     moves.innerText = parseInt(moves.innerText) +1;
   } 


   function setup(){
        const resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", resetGame);
    resetGame()
}
    
function resetGame() { 
    const cards = document.querySelectorAll(".card");
      card.classList.remove('flipped');
       }



 
 
 function allCardsMatched(){
    
// if matched value is 8 that menans user has matched all the cards 

}

 startGame()   
     
        
    
     
 
