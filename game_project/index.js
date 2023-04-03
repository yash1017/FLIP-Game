const cards =document.querySelectorAll(".card");
var point = document.querySelector(".text");
const cont = document.querySelector(".win");

var text = document.createTextNode("CAN YOU WIN");
point.appendChild(text);
cards.forEach( (card)=>{
  card.addEventListener("click",flip);
})

var firstCard,secondCard,isFlipped=false;

function flip(){
  this.classList.add("flip")
  if(!isFlipped)
  {
    firstCard=this;
    isFlipped = true;
  }
  else{
    secondCard=this;
    checkOut();
  }
}

function checkOut(){
  if(firstCard.dataset.image === secondCard.dataset.image)
  {
    success();
  }
  else{
    failure();
  }
}

function success(){
  // point.innerHTML=null;

  cont.classList.add("won");

  point.removeChild(text);
  text = document.createTextNode("YOU WON");
  point.appendChild(text);
  firstCard.removeEventListener("click",flip);
  secondCard.removeEventListener("click",flip);
  setTimeout( ()=>{
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  },2000)
  
}

function failure(){
  
  setTimeout(()=>
  {
    firstCard.classList.remove("flip");
  secondCard.classList.remove("flip");
  reset();
  },1000)
}

function reset(){
  firstCard=null;
  secondCard=null;
  isFlipped=false;
  point.removeChild(text);
  cont.classList.remove("won");
  text= document.createTextNode("CAN YOU WIN");
  point.appendChild(text); 
}

(function shuffle(){
  cards.forEach( (card)=>{
  var index = Math.floor(Math.random() * 16);
  card.style.order= index;
})})()
