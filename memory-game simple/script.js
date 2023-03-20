const gameContainer = document.getElementById("game");
let card1 = null;
let card2 = null;
let cardsFlipped = 0;
let notClicking = false;


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];


function shuffle(array) {
  let counter = array.length;

  
  while (counter > 0) {

    let index = Math.floor(Math.random() * counter);

    
    counter--;


    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);


function createDivsForColors(colorArray) {
  for (let color of colorArray) {
   
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}

function handleCardClick(event) {

  if(notClicking) {
    return;
  }
  if(event.target.classList.contains("flipped")) {
    return;
  }
  
  let currentCard = event.target;
  currentCard.style.backgroundColor = currentCard.classList[0];

  if(!card1 || !card2){
    currentCard.classList.add("flipped");
    card1 = card1 || currentCard;
    card2 = currentCard === card1 ? null : currentCard;
  }
  if(card1 && card2){
    notClicked = true;

    let img1 = card1.className;
    let img2 = card2.className;

    if(img1 === img2){
      cardsFlipped += 2;
      card1.removeEventListener("click", handleCardClick);
      card2.removeEventListener("click", handleCardClick);
      card1 = null;
      card2 = null;
      notClicking = false;
    }
    else{
      setTimeout(function(){
        card1.style.backgroundColor= ""; 
        card2.style.backgroundColor= ""; 
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1 = null;
        card2 = null;
        notClicking=false;
      }, 800);

    }
  } if (cardsFlipped === COLORS.length){
  alert("game over!"); } 
  
}
createDivsForColors(shuffledColors);
