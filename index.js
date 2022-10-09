
let cards =[]

let sum = 0

let isAlive = false
let hasBlackJack = false

 let message = ""

 //let messageEl = document.getElementById("message-el")

let messageEl = document.getElementById("message-el")

let cardsEl=document.getElementById("cards-el")

//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector(".sum-el")


let player ={
    name: "Lumin",
    chips: 188
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = (Math.random() * 13 ) + 1 
    let flooredNumber = Math.floor(randomNumber)
    if (flooredNumber === 1) {
        flooredNumber = 1
    } else if (flooredNumber >10 ) {
        flooredNumber = 10
    }    

    return flooredNumber
}
function startGame(){
    isAlive = true
    cards  = []
    cards[0] = getRandomCard()
    cards[1] = getRandomCard()
    sum = cards[0] + cards[1]
    renderGame()
}


 function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "  
    }

    if (sum <= 20){
        message = "Do you want to draw a new card? "     
    } 
    else if ( sum === 21) {
        message = "Wohoo! You've got Blackjack!"  
        hasBlackJack = true  
    }
    else {
        message = "You're out of the game! "     
        isAlive = false  
    }
    messageEl.textContent = message
 }


 function newCard() {
    let card = getRandomCard()
    if (isAlive === true  && hasBlackJack === false) {
        sum += card
        cards.push(card)
        renderGame()
}   else {
        cards= []
        sum =0
        cardsEl.textContent ="Cards: "
        sumEl.textContent ="Sum: "
        isAlive = true
        hasBlackJack = false
}

 }
//messageEl.textContent = message


let messages =[
    "hey",
    "what",
    "then"
]
let newMesssage = "same here "


for (let count = 1; count <11; count +=1){

}

for(let i  = 0; i < 6; i +=1) {
    console
}