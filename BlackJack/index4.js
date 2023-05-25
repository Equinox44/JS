let p1 = 102
let p2 = 107

function getfasttime(){
    if(p1 > p2){
        return p2
    }
    else if(p1 < p2){
        return p1
    }
    else{
        return p1
    }
}

function totalracetime(){
    totalr = p1 + p2
    return totalr
}

console.log(totalracetime())