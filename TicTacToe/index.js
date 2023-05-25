const cells = document.querySelectorAll('.cell');
const statustxt = document.querySelector('#statustxt');
const restartbtn = document.querySelector('#restartbtn');
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let options = ["","","","","","","","",""]
let currentPlayer = "X";
let running = false;

startGame();

function startGame(){
    running = true;
    cells.forEach((cell)=>cell.addEventListener('click', cellClicked))
    restartbtn.addEventListener('click',restartGame);
    statustxt.textContent = `${currentPlayer}'s turn`;
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex")

    if(options[cellIndex] != "" || !running){
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statustxt.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
    let Won = false;
    for(let x=0; x <winConditions.length; x+=1){
        const conditions = winConditions[x];
        const cellA = options[conditions[0]]
        const cellB = options[conditions[1]]
        const cellC = options[conditions[2]]
        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            Won = true;
            break;
        }
    }
    if(Won){
        statustxt.textContent = `${currentPlayer} won the game`;
        running = false;
    }
    else if(!options.includes("")){
        statustxt.textContent = `DRAW!!`;
        running = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = "X";
    options = ["","","","","","","","",""];
    statustxt.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell=>cell.textContent="")
    running = true;
}