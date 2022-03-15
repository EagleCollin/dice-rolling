const number = document.querySelector("#quantity");
const typeDie = document.querySelector("#dice");
const numberLabel = document.querySelector(".quantity-label");


//roll function
function rollDice(){
    
    const rolled = []
    for (let i=0; i<number; i++){
        const dice = Math.floor(Math.random() * typeDie) + 1
        rolled.push(dice)
    }
    return rolled;
}

function updateQuantityLabel() {
    const quantity = number.value;
    numberLabel.innerText = quantity
}

const total = rollDice()
console.log(total)

//event listeners: when dice is selected
typeDie.addEventListener("submit", rollDice)

//event listener: when hits enter for quantity
number.addEventListener("input", updateQuantityLabel)
number.addEventListener("submit", rollDice)

//on application start
rollDice();

updateQuantityLabel()