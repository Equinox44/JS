
function generaterand(){
    let randnum = Math.floor(Math.random() * 7)
    return randnum
}

function checkdice(){
    num = generaterand()
    if(num === 0){
        checkdice()
    }
    else{
    return num
    }
}

function rolldice(){
    let randnum = Math.floor(Math.random() * 6) + 1
    return randnum
}

console.log(rolldice())
