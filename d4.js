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
    const initialValue = 0
    let rolled = []
    for (let i=0; i<numberDice.value; i++){
        let dice = Math.floor(Math.random() * sideDie) + 1;
        rolled.push(dice);
        console.error();
    }

    diceTotal.innerText = `${rolled}`;
    console.log(rolled);
    if (!e.target.match(".btn-20")){const diceSum = rolled.reduce((previousValue,currentValue) => previousValue + currentValue, initialValue);}
    return rolled;
    
}

//change quantity display
function updateQuantityLabel() {
    const quantity = numberDice.value;
    numberLabel.innerText = quantity;
}

//add dice together
function addDice(e){
    if (e.target.match(".btn-20")) return;
}

//event listeners: when dice is selected
d4.addEventListener("click", (e)=>rollDice(e, 4));
d8.addEventListener("click", (e)=>rollD8(e, 8));
d10.addEventListener("click", (e)=>rollD10(e, 10))
d12.addEventListener("click", (e)=>rollD12(e, 10))
d20.addEventListener("click", (e)=>rollD20(e, 20))

//event listener: when hits enter for quantity
numberDice.addEventListener("input", updateQuantityLabel);

//on application start
updateQuantityLabel();