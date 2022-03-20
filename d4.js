const numberDice = document.querySelector("#quantity");
const numberLabel = document.querySelector(".quantity-label");
const diceRolled = document.querySelector(".rolled-dice");
const diceTotal = document.querySelector(".dice-total");
const overTotal = document.querySelector(".final-total");
const modifiers = document.querySelector("#modifiers")
const modLabel = document.querySelector(".modifiers-label");
const d4 = document.querySelector(".btn-d4");
const d8 = document.querySelector(".btn-d8");
const d10 = document.querySelector(".btn-d10");
const d12 = document.querySelector(".btn-d12");
const d20 = document.querySelector(".btn-d20");

let rolled = [];
let diceSum = 0;
//roll function
function rollDice(e, sideDie){
    e.preventDefault();
    
    let rolled = [];
    for (let i=0; i<numberDice.value; i++){
        let dice = Math.floor(Math.random() * sideDie) + 1;
        rolled.push(dice);
        console.error();
    }

    diceRolled.innerText = `${rolled}`;
    console.log(rolled);
    function addDice(rolled){
        
        let initialValue = 0
        let diceSum = rolled.reduce((previousValue,currentValue) => previousValue + currentValue, initialValue);
        diceTotal.innerText = `${diceSum}`
        console.log(diceSum)
        return diceSum;
    }
    addDice(rolled)
    return rolled;
    
}

//change quantity display
function updateQuantityLabel() {
    const quantity = numberDice.value;
    numberLabel.innerText = quantity;
};

function updateMod(){
    const modDisplay = modifiers.value;
    modLabel.innerText = modDisplay;
};

// take in modifier argument
function addMod(){
    const numAdded = modifiers.value
    let completeTotal = diceSum + numAdded;
    overTotal.innerText = `${completeTotal}`;
    return completeTotal;
};

//event listeners: when dice is selected
d4.addEventListener("click", (e)=>rollDice(e, 4), addMod());
d8.addEventListener("click", (e)=>rollDice(e, 8), addMod());
d10.addEventListener("click", (e)=>rollDice(e, 10), addMod())
d12.addEventListener("click", (e)=>rollDice(e, 10), addMod())
d20.addEventListener("click", (e)=>rollDice(e, 20), addMod())

//on application start
updateQuantityLabel();
updateMod();