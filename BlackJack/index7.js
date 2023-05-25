let hasSolvedChal = false
let hasHintsLeft = false

let likesDocu = false
let likeStart = false

checklike()

function checklike(){
    if(likeStart === true || likesDocu === true){
        recommendMovie()
    }
    else{
        console.log('Recommending another movie')
    }
}

function recommendMovie(){
    console.log('Check out this new movie')
}



function checksquiz(){
    if(hasHintsLeft === false && hasSolvedChal === false){
        showSolution()
    }
    else{
        console.log('check hints')
    }
}

function showSolution(){
    console.log('Showing Solution...')
}