const cardText = document.querySelectorAll(".card__description");
const button = document.querySelectorAll("button");

function initTruncateClasses(){

    cardText.forEach(card => {
        card.classList.add("truncate");
    })
}

function toggleText(){
   this.parentElement.classList.toggle("truncate");
}

function attachListenerButton(){
  button.forEach(btn => {
    btn.addEventListener("click", toggleText);
  })  
}

initTruncateClasses();
attachListenerButton();
