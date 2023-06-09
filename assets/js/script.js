const ANIMALS_CONFIG = [
  {
    id: "elephant",
    imageFileName: "elephant.png",
    name: "elephant"
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
    imageFileName: "owl.png" ,
    name: "owl"
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
    imageFileName: "turtle.png",
    name: "turtle"
  }
];
//Variables to store the currently selected cards
let firstCard = null ;
let secondCard = null;
let moves = 0 ;
let score = 0 ;
let allowClick = true;
// let noOfCardOpen ;

//Start Game function
function startGame() {
  displayAnimals();
  addEventListenersToCard();
  }

function addEventListenersToCard() {
  document.querySelectorAll(".card").forEach(function(card){
    card.addEventListener("click", flipCard);
  });
};

//Animal display 
function displayAnimals() {
  let animalsList = [...ANIMALS_CONFIG, ...ANIMALS_CONFIG];
  animalsList = shuffleArray(animalsList);

  let animalsHTML = "";
  animalsList.forEach(function(eachAnimal) {
    animalsHTML += `<div class="card-face card">
<img src="assets/images/${eachAnimal.imageFileName}" 
         alt="${eachAnimal.name}" data-id="${eachAnimal.id}">
              </div>`;
  });
  document.getElementById("game-container").innerHTML = animalsHTML;
};

//Shuffle cards everytime new game starts 
function shuffleArray(array){
  return array.sort( () => .5 - Math.random() );
};

// Card flips when user clicks a card 
function flipCard(e) {
  if(!allowClick) {
    return;
  }

  e.target.classList.toggle("flipped");
  if(!firstCard) {
      //First card selected
      firstCard = e.target;
  }else{
        //Second card selected
      secondCard = e.target;
  }
  if(firstCard && secondCard) {
      allowClick = false;
      checkForMatch();
      incrementMoves();
    }
};


function setMsg(msg) {
  document.getElementById('msg').innerText = msg;
}

//On 2nd click check if both card animal matches
function checkForMatch(){ 
    const firstCardId = firstCard.dataset.id;
    const secondCardId = secondCard.dataset.id;
    if(firstCardId === secondCardId) {
      incrementScore()
      firstCard = null;
      secondCard = null;
      setMsg("Good job, it's a match!");
      setTimeout(()=>{
        allowClick= true;
        setMsg("");
      },1000)
    } else{
        //  if two cards don't match
        // Else, flip back both cards
        setMsg("Ah sorry no match, try again");
        const timeoutRef = setTimeout(()=> {
            firstCard.classList.toggle("flipped");
            secondCard.classList.toggle("flipped");
            firstCard = null;
            secondCard = null;
            allowClick= true;
            setMsg("");
            clearTimeout(timeoutRef);
        }, 1000)
    };
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
};


function resetGame() {
  firstCard = null ;
  secondCard = null;
  moves = 0 ;
  score = 0 ;
  startGame();
}
  

startGame ()
   
     
        
    
     
 
