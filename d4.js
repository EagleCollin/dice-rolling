const numberDice = document.querySelector("#quantity");
const numberLabel = document.querySelector(".quantity-label");
const diceRolled = document.querySelector(".rolled-dice");
const diceTotal = document.querySelector(".dice-total");
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
    finalTotal = [];
    for (let i=0; i<numberDice.value; i++){
        let dice = Math.floor(Math.random() * sideDie) + 1;
        rolled.push(dice);
        console.error();
    }

    diceRolled.innerText = `${rolled}`;
    console.log(rolled);
    if (sideDie===20){
        
        for(let i = 0; i<rolled.length;i++){
                let modSum = parseInt(modifiers.value) + parseInt(rolled[i]);
                finalTotal.push(modSum)     
        }
        diceTotal.innerText = finalTotal
        return;}
        
    
    else {
        
        let initialValue = 0
        let diceSum = rolled.reduce((previousValue,currentValue) => previousValue + currentValue, initialValue);
        diceTotal.innerText = parseInt(diceSum) + parseInt(modifiers.value)
        
        console.log(diceSum);
        
        
    }
}

  


//change quantity display
function updateQuantityLabel() {
    const quantity = numberDice.value;
    numberLabel.innerText = quantity;
};
function updateMod() {
    const mods = modifiers.value;
    modLabel.innerText = mods;
};

//add dice together
function addDice(e){
    
    let initialValue = 0
    let diceSum = rolled.reduce((previousValue,currentValue) => previousValue + currentValue, initialValue);
    return diceSum;
}


// take in modifier argument


//event listeners: when dice is selected
d4.addEventListener("click", (e)=>rollDice(e, 4));
d8.addEventListener("click", (e)=>rollDice(e, 8));
d10.addEventListener("click", (e)=>rollDice(e, 10))
d12.addEventListener("click", (e)=>rollDice(e, 10))
d20.addEventListener("click", (e)=>rollDice(e, 20))

//update quantity display
numberDice.addEventListener("input", updateQuantityLabel)
modifiers.addEventListener("input", updateMod)

//on application start
updateQuantityLabel();
updateMod();