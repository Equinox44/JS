let player = {
    name: 'Nani',
    chips: 180
}

let cards = []
let sum = 0
let isAlive = false
let blackjack = false
message = ''


playerdetails = document.getElementById('player')
playerdetails.textContent = player.name + ' Chips: ' + player.chips

function startgame(){
    isAlive = true
    let fcard = getrandomcard()
    let scard = getrandomcard()
    sum = fcard + scard
    cards = [fcard, scard]
    rendergame();
}

function rendergame(){

    messageEl = document.getElementById('message')
    cardEl = document.getElementById('card')
    sumEl = document.querySelector('#sum')

    cardEl.textContent = 'Cards: '

    for(x=0; x<cards.length; x+=1){
        cardEl.textContent += cards[x] + ' '
    }

    sumEl.innerText =  'Sum: ' + sum

    if (sum <= 20){
        message = 'Do you want to draw a new card'
        blackjack = false
    }
    else if (sum === 21){
        message = 'Blackjack!'
        blackjack = true
    }
    else{
        message = 'Your out of the game'
        blackjack = false
        isAlive = false
    }
    messageEl.textContent = message
}

function newcard(){
    if(isAlive === true && blackjack === false){
        ncard = getrandomcard()
        cards.push(ncard)
        sum+=ncard
        rendergame()
    }
}

function getrandomcard(){
    let randnum = Math.floor(Math.random() * 13) + 1
    if(randnum === 1){
        randnum = 11
        return randnum
    }
    else if(randnum > 10){
        randnum = 10
        return randnum
    }
    else{
    return randnum;
    }
}

