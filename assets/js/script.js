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
    }

};
   
 
//    for (let card of cards){
//      card.addEventListner('click', checkForMatch)
//    }

 function checkForMatch() { 
    const firstCardId = firstCard.dataset.id;
    const secondCardId = secondCard.dataset.id;
    if(firstCardId === secondCardId) {
        incrementScore()
        firstCard = null;
        secondCard = null;

    } else {
        const timeoutRef = setTimeout(()=> {
            firstCard.classList.toggle('flipped'); 
            secondCard.classList.toggle('flipped'); 
            firstCard = null;
            secondCard = null;
            clearTimeout(timeoutRef);
        }, 1000)
    }
    // // Flip the card
    //  cardIsClicked.classList.add('flipped')
     
    // if (!firstCard) {
    //     // First card selected
    //     firstCard = cardIsClicked
    //  }
    //  // Store card which was clicked first

    //  // Wait for 2nd click
    //   else if (!secondCard) {
    //     // Second card selected 
    //     secondCard = cardIsClicked
    //   }
    //   let firstCardImg = firstCard.querySelector("assets/image.png")
    //   let secondCardImg = secondCard.querySelector("assets/image.png")
    //    // On 2nd click check if both card animal matches
    // if (firstCard.dataset.imageFileName == secondCard.dataset.imageFileName('matched')){
       
    //     // if two cards are matched 
    //     firstCard.classList.add('matched');
    //     secondCard.classList.add('matched');
    //       // If yes, do nothing and increment score
    //     incrementScore();
    //     alert("Good job, it's a match!");
    //     return console.log('Card Matched');
    //  } 
    //  else {
    //     // if two cards don't match
    //     // Else, flip back both cards
    //     flipCardsBack();
    //     alert("ah sorry no match, try again")
    // }
    
  };

  function incrementScore(){
    const scoreNode = document.getElementById('score');
    scoreNode.innerText = parseInt(scoreNode.innerText) + 1;
    // increment matched value by one
    // eachScore = 1; 
  }

//   function disableCards() {
//     firstCard.removeEventListener('click' , flipCard);
//     secondCard.removeEventListener('click', flipCard);
//     resetCards();
//   }
 
//   function flipCardsBack() {
//      lockDeck = true;
     
//      setTimeout(() => {
//         firstCard.classList.remove('flipped');
//         secondCard.classList.remove('flippped');
//         resetCards();
//    } , 100);
//   }
  
//   function setup() {
//    const resetButton = document.getElementById("reset-button");
//   resetButton.addEventListener("click", resetGame);  
//   }
    
// function resetGame() { 
//     document.querySelectorAll(".card").forEach((card)=>{
//       card.classList.remove("flipped");
//     })
//  }
 
//  function allCardsmatched(){
// // if matched value is 8 that menans user has matched all the cards 
//   matchedCards +=2;
//  if(matchedCards === card.length){
//     matchedCards=8
//     alert('Congratulations you have found all cards!')
//  }
// }

 startGame()   
     
        
    
     
 
