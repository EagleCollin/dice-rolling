const number = document.querySelector("#quantity");
const numberLabel = document.querySelector(".quantity-label");
const diceTotal = document.querySelector(".rolled-dice");
const d4 = document.querySelector(".btn-d4");
const d8 = document.querySelector(".btn-d8");
const d10 = document.querySelector(".btn-d10");
const d12 = document.querySelector(".btn-d12");
const d20 = document.querySelector(".btn-d20");

//roll function
function rollDice(e, sideDie){
    e.preventDefault();
    const rolled = []
    for (let i=0; i<number; i++){
        const dice = Math.floor(Math.random() * sideDie) + 1
        rolled.push(dice)
    }
    diceTotal.innerText = `${rolled}`
    return rolled;
    
}

//change quantity display
function updateQuantityLabel() {
    const quantity = number.value;
    numberLabel.innerText = quantity;
}

//roll different dice
function rollD4(e){
    if (!e.target.matches(".btn-d4")) return;

    rollDice(e, 4);
}

function rollD8(e){
    if (!e.target.matches(".btn-d8")) return;

    rollDice(e, 8);
}

function rollD10(e){
    if (!e.target.matches(".btn-d10")) return;

    rollDice(e, 10);
}

function rollD12(e){
    if (!e.target.matches(".btn-d12")) return;

    rollDice(e, 12);
}

function rollD20(e){
    if (!e.target.matches(".btn-d20")) return;

    rollDice(e, 20);
}

const total = rollDice(e,20);
console.log(total)

//event listeners: when dice is selected
d4.addEventListener("click", ()=>rollD4());
d8.addEventListener("click", ()=>rollD8());
d10.addEventListener("click", ()=>rollD10())
d12.addEventListener("click", ()=>rollD12())
d20.addEventListener("click", ()=>rollD20())

//event listener: when hits enter for quantity
number.addEventListener("input", updateQuantityLabel);

//on application start
rollDice(e, 20)

updateQuantityLabel();