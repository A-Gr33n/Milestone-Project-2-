const ANIMALS_CONFIG = [
  {
    id: "elephant",
    imageFileName: "elephant.png",
    name: "Elephant"
  },
  {
    id: "fox",
      imageFileName: "fox.png",
      name: "fox"
  },
  {
    id: "lion",
    imageFileName: "lion.png" ,
    name: "lion"
  },
  {
    id: "raccoon",
    imageFileName: "raccoon.png",
    name: "raccoon"
    },
  {
    id: "owl",
    imageFileName: "Owl.png" ,
    name: "Owl"
  },
  {
    id: "sheep",
    imageFileName: "sheep.png",
    name: "sheep"
  },
  {
    id: "squirrel",
    imageFileName: "squirrel.png" ,
    name: "squirrel"
  },
  {
    id: "turtle",
    imageFileName: "Turtle.png",
    name: "Turtle"
  }
];
// Variables to store the currently selected cards
 let firstCard = null ;
 let secondCard = null;
let moves = 0 ;
let score = 0 ;
// let noOfCardOpen ;

function startGame () {
  displayAnimals();
  addEventListenersToCard();
  }

function addEventListenersToCard() {
  document.querySelectorAll(".card").forEach(function(card){
    card.addEventListener("click", flipCard);
  });
}

function displayAnimals() {
  let animalsList = [...ANIMALS_CONFIG, ...ANIMALS_CONFIG];
  animalsList = shuffleArray(animalsList);

  let animalsHTML = "";
  animalsList.forEach(function(eachAnimal) => {
    animalsHTML += `<div class="card-face card"><img src="assets/images/${eachAnimal.imageFileName}" 
                   alt="${eachAnimal.name}" data-id="${eachAnimal.id}">
              </div>`;
  });

  document.getElementById("game-container").innerHTML = animalsHTML;
}

function shuffleArray(array){
  return array.sort( () => 5 - Math.random() );
}

function flipCard(e) {
    e.target.classList.toggle("flipped");
    if(!firstCard) {
        // First card selected
        firstCard = e.target;
    } else {
         // Second card selected
        secondCard = e.target;
    }
    if(firstCard && secondCard) {
        checkForMatch();
        incrementMoves();
     }
};

function checkForMatch() { 
    // On 2nd click check if both card animal matches
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
        //  if two cards don't match
        // Else, flip back both cards
        const timeoutRef = setTimeout(()=> {
            firstCard.classList.toggle("flipped"); 
            secondCard.classList.toggle("flipped"); 
            firstCard = null;
            secondCard = null;
            clearTimeout(timeoutRef);
            alert("ah sorry no match, try again");
        }, 1000)
    }
};

  function incrementScore() {
     const scoreNode = document.getElementById("score");
    scoreNode.innerText = parseInt(scoreNode.innerText) + 1;
    // increment matched value by one
    // eachScore = 1
};

function incrementMoves() {
     const moves = document.getElementById("moves-count");
     moves.innerText = parseInt(moves.innerText) +1;
     // increment move when both cards are flipped
     // each move = 1
   } ;
   startGame ()
   
     
        
    
     
 
