let player = 
{
    name: "Aviv",
    chips: 154
}


let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let cards_arr =[];

const sum_str = "Sum: ";
const cards_str = "Cards: ";
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;


function GetRandomNum(){ return Math.floor(Math.random() * 12 ) + 2;}

function draw()
{
    isAlive = true;
    let firstCard = GetRandomNum();
    let secondCard = GetRandomNum();
    let message = "";
    
    sumEl.textContent = sum_str +sum;
    let str = cards_str;
    for(let i =0; i < cards_arr.length;i++)
    {
        if(i >0)
        {
            str += " , ";
        }
        str += cards_arr[i]; 
    }
    cardsEl.textContent = str;
    
    if (sum <= 20) 
    {
        message = "Do you want to draw a new card?";
    }
     else if (sum === 21) 
    {
        message = "You've got Blackjack!";
        hasBlackJack = true;
        isAlive = false;
    } 
    else 
    {
        message = "Disqualified! Game Over";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function onClick_startGame()
{ 
    sum =0;
    sumEl.textContent = sum_str +sum;
    cards_arr = [];
    cardsEl.textContent = cards_str;
    draw();
}

function onClick_newCard() 
{
    if(isAlive === true && hasBlackJack === false)
    {
        let card = GetRandomNum();
        cards_arr.push(card);
        sum += card;
        draw();
    }
}
