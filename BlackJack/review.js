let person = {
    name: 'Kyle',
    age: 22,
    country: 'Philippines'
}

function logData(){
    details = person.name + ' is ' + person.age + ' years old' + ' and lives in ' + person.country
    return details
}

let age = 105
let message = ''

function checkAge(){
    if(age < 6){
        message = 'Free'
    }
    else if(age >= 6 && age <=17){
        message = 'Child Discount'
    }
    else if(age >= 18 && age <=26){
        message = 'Student Discount'
    }
    else if(age >= 27 && age <=66){
        message = 'Full price'
    }
    else if (age > 66){
        message = 'Senior Citizen Discount'
    }
    else{
        message = 'not integer'
    }
    return message
}


let largeCountries = ['China', 'India', 'USA', 'Indonesia', 'Pakistan']

largeCountries = ['Tuvalu', 'India', 'USA', 'Indonesia', 'Monaco']

largeCountries.pop()
largeCountries.shift()
largeCountries.unshift('China')
largeCountries.push('Pakistan')

let dayofmonthh = 13
let weekday = 'friday'
let log = ''

function checkthe13th(){
    if(dayofmonthh === 13 && weekday === 'friday'){
        log = 'spooky face'
    }else{
        log = 'it is not friday the 13th'
    }
    return log          
}

let hands = ['rocks', 'paper', 'scissor']
let winner = ''


function generatehand(){
    rand = Math.floor(Math.random() * 3)
    rand = hands[rand]
    return rand
}

function checkwinner(){
    hand1 = generatehand()
    hand2 = generatehand()   
    if(hand1 === 'rocks' && hand2 === 'scissor'){
        winner = "Hand 1 win with a hand of a Rock"
    }
    else if (hand1 === 'rocks' && hand2 === 'paper'){
        winner = "Hand 2 win with a hand of a paper "
    }
    else if (hand1 === 'scissor' && hand2 === 'paper'){
        winner = "Hand 1 win with a hand of a scissor"
    }
    else if (hand2 === 'rocks' && hand1 === 'scissor'){
        winner = "Hand 2 win with a hand of a Rock"
    }
    else if (hand2 === 'rocks' && hand1 === 'paper'){
        winner = "Hand 1 win with a hand of a paper"
    }
    else if (hand2 === 'scissor' && hand1 === 'paper'){
        winner = "Hand 2 win with a hand of a Rock"
    }
    else {
        winner = "It is a tie"
    }
    return winner
}

let fruit = ['apple', 'orange', 'apple', 'apple']
let appleShelf = document.getElementById('apple')
let orangeShelf = document.getElementById('orange')
appleShelf.textContent = 'Fruits: '
orangeShelf.textContent = 'Fruits: '

for(x=0; x < fruit.length; x+=1){
    if(fruit[x] === 'apple'){
        appleShelf.textContent+=fruit[x] + ' '
    }
    else if(fruit[x] === 'orange'){
        orangeShelf.textContent+= fruit[x] + ' '
    }
    else{
    }
}