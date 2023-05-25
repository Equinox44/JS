
const submit = document.getElementById("submit");
const totalg = document.getElementById("totalg");
const answer = generateRand();
let guesses = 0;


submit.addEventListener("click", function(){
    let guess = document.getElementById("guess");
    guesses+=1;
    if (guess.value === ""){
        window.alert("No input, please write a number");
        guesses-=1
    }
    else if(guess.value > answer){
        window.alert("Wrong answer, your guess is too high");
        guess.value = "";
    }
    else if(guess.value < answer){
        window.alert("Wrong answer, your guess is too low");
        guess.value = "";
    }
    else{
        window.alert(`You have gues it right with a total number of ${guesses} tries`);
        window.location.reload();
    }
    totalg.innerText = `Total number of guesses: ${guesses}`
})

function generateRand(){
    number = Math.floor(Math.random() * 10)+1
    return number
}
