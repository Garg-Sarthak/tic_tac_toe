let board = [];


const mainBox = document.querySelector("#container");

function changeSymbol(currSymbol){
    if (currSymbol == "X"){document.querySelector("#currSymbol").innerText ="O"; return "O"};
    document.querySelector("#currSymbol").innerText ="X";
    return "X"; 
}

function checkWin(board){
    if (board[0]==board[1] && board[1]==board[2] && board[1]!=undefined){
        for (let box of document.getElementsByClassName("R1")){
            box.style.color = "green";
            document.querySelector("#winner").innerHTML = `${changeSymbol(currSymbol)} wins!!!`;
        }
        for (let box of document.getElementsByClassName("box")){
            box.style.pointerEvents="none";
        }
        return true;
    }else if (board[3]==board[4] && board[4]==board[5] && board[5]!=undefined){
        for (let box of document.getElementsByClassName("R2")){
            box.style.color = "green";
            document.querySelector("#winner").innerHTML = `${changeSymbol(currSymbol)} wins!!!`;
        }
        for (let box of document.getElementsByClassName("box")){
            box.style.pointerEvents="none";
        }
        return true;
    }else if (board[6]==board[7] && board[7]==board[8] && board[8]!=undefined){
        for (let box of document.getElementsByClassName("R3")){
            box.style.color = "green";
            document.querySelector("#winner").innerHTML = `${changeSymbol(currSymbol)} wins!!!`;
        }
        for (let box of document.getElementsByClassName("box")){
            box.style.pointerEvents="none";
        }
        return true;
    }else if (board[0]==board[3] && board[6]==board[3] && board[3]!=undefined){
        for (let box of document.getElementsByClassName("C1")){
            box.style.color = "green";
            document.querySelector("#winner").innerHTML = `${changeSymbol(currSymbol)} wins!!!`;
        }
        for (let box of document.getElementsByClassName("box")){
            box.style.pointerEvents="none";
        }
        return true;
    }else if (board[1]==board[4] && board[4]==board[7] && board[7]!=undefined){
        for (let box of document.getElementsByClassName("C2")){
            box.style.color = "green";
            document.querySelector("#winner").innerHTML = `${changeSymbol(currSymbol)} wins!!!`;
        }
        for (let box of document.getElementsByClassName("box")){
            box.style.pointerEvents="none";
        }
        return true;
    }else if (board[2]==board[5] && board[5]==board[8] && board[8]!=undefined){
        for (let box of document.getElementsByClassName("C3")){
            box.style.color = "green";
            document.querySelector("#winner").innerHTML = `${changeSymbol(currSymbol)} wins!!!`;
        }
        for (let box of document.getElementsByClassName("box")){
            box.style.pointerEvents="none";
        }
        return true;
    }else if (board[0]==board[4] && board[8]==board[4] && board[8]!=undefined){
        for (let box of document.getElementsByClassName("D1")){
            box.style.color = "green";
            document.querySelector("#winner").innerHTML = `${changeSymbol(currSymbol)} wins!!!`;
        }
        for (let box of document.getElementsByClassName("box")){
            box.style.pointerEvents="none";
        }
        return true;
    }
    else if (board[2]==board[4] && board[6]==board[4] && board[6]!=undefined){
        for (let box of document.getElementsByClassName("D2")){
            box.style.color = "green";
            document.querySelector("#winner").innerHTML = `${changeSymbol(currSymbol)} wins!!!`;
        }
        for (let box of document.getElementsByClassName("box")){
            box.style.pointerEvents="none";
        }
        return true;
    }
    return false;
}


let rowNum; let colNum; let index; let symbolCount = 0;

const startSymbolBtn = document.querySelector("#starter");

let startSymbol  = startSymbolBtn.value;
let currSymbol = startSymbol;
document.querySelector("#currSymbol").innerText = currSymbol;

startSymbolBtn.addEventListener('input',function(e){
    currSymbol = startSymbolBtn.value;
    for (let box of document.querySelectorAll(".box")){
        box.innerHTML = "";
    }
    board = [];
    symbolCount = 0;
    document.querySelector("#currSymbol").innerText = currSymbol;
})

mainBox.addEventListener('click',function(e){
    if (e.target.classList[0] == "box"){
        if (e.target.innerText == ""){
            rowNum = parseInt(e.target.id[0]); 
            colNum = parseInt(e.target.id[1]); 
            index = (((rowNum-1)*3) + colNum)-1;
            board[index] = currSymbol;
            e.target.innerText = currSymbol;
            currSymbol = changeSymbol(currSymbol);
            symbolCount++;
            checkWin(board);
            if (symbolCount==9 && !checkWin(board)){
                document.querySelector("#winner").innerText = "GAME DRAW!!!";
            }
        }
    }
})

const rstBtn = document.getElementById("reset");
rstBtn.addEventListener("click",function(){
    
    for (let box of document.getElementsByClassName("box")){
        box.style.pointerEvents = "auto";
        box.innerText = "";
        box.style.color = "#cfd3cd";
    }
    board = [];
    currSymbol = startSymbolBtn.value;
    symbolCount = 0;
    document.querySelector("#winner").innerText = "";

})
