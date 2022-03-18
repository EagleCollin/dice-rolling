const numberDice = document.querySelector("#quantity");
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
    let rolled = []
    for (let i=0; i<numberDice; i++){
        let dice = Math.floor(Math.random() * sideDie) + 1
        rolled.push(dice)
        console.error()
    }

    diceTotal.innerText = `${rolled}`
    console.log(rolled)
    return rolled;
    
}

//change quantity display
function updateQuantityLabel() {
    const quantity = numberDice.value;
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


//event listeners: when dice is selected
d4.addEventListener("click", (e)=>rollD4(e));
d8.addEventListener("click", (e)=>rollD8(e));
d10.addEventListener("click", (e)=>rollD10(e))
d12.addEventListener("click", (e)=>rollD12(e))
d20.addEventListener("click", (e)=>rollD20(e))

//event listener: when hits enter for quantity
numberDice.addEventListener("input", updateQuantityLabel);

//on application start
updateQuantityLabel();