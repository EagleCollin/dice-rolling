const d4 = Math.floor(Math.random() * 4) + 1
console.log(d4)

const d6 = Math.floor(Math.random() * 6) + 1
console.log(d6)

const d8 = Math.floor(Math.random() * 8) + 1
console.log(d8)

const d10 = Math.floor(Math.random() * 10) + 1
console.log(d10)

const d12 = Math.floor(Math.random() * 12) + 1
console.log(d12)

const d20 = Math.floor(Math.random() * 20) + 1
console.log(d20)

document.querySelector("#quantity");
numberDice.addEventListener("input", updateQuantityLabel);

if (Event.target.matches(".btn-20")) return;