// Event Binding
// when event will be triggered than the function binded with event will be called...
window.addEventListener("load", initEvents);

let btns;
let counter = 0;
let winningCombinations = [[0,1,2],[3,4,5],[6,7,8],
                           [0,3,6],[1,4,7],[2,5,8],
                           [0,4,8],[2,4,6]];

function initEvents() {
    btns = document.querySelectorAll(".btn");
    for(let i = 0; i < btns.length; i++) {
        btns[i].setAttribute("title",i);
        btns[i].addEventListener("click", userMove);
    }
}

function userMove() {
    // this - will hold current object(HTML Tag) reference
    // console.log(this);
    this.innerHTML = "X";
    checkWinner(this.title, "X");
    counter++;
    if(counter < 9) {
        // setTimeout(function() {
        //     cpuMove();
        // },500);
        cpuMove();
    }
}

function cpuMove() {
    let cpuPos = parseInt(Math.random() * 9);
    console.log("CPU Moved : " + cpuPos);
    if(btns[cpuPos].innerHTML == "") {
        btns[cpuPos].innerHTML = "0";
        btns[cpuPos].setAttribute("disabled",true);
        checkWinner(cpuPos, "0");
    }
    else {
        cpuMove();
    }
    counter++;
}

function checkWinner(pos, choice) {
    for(let i = 0; i < winningCombinations.length; i++) {
        for(let j = 0; j < 3; j++) {
            if(pos == winningCombinations[i][j]) {
                winningCombinations[i][j] = choice;
            }
        }
    }

    for(let i = 0; i < winningCombinations.length; i++) {
        if(winningCombinations[i][0] == choice && winningCombinations[i][1] == choice && winningCombinations[i][2] == choice) {
            console.log(choice + " wins...");
            break;
        }
    }
}