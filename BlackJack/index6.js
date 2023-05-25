let completecourse = true
let givescerti = true

checkelig()

function checkelig(){
    if(completecourse === true && givescerti === true){
        genecerti()
    }
    else{
        console.log('please retake the course')
    }
}

function genecerti(){
    console.log('generate certificate')
}

