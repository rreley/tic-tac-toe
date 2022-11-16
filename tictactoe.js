
// create board
var board = new Array(9)

// set initial turn
var turn = 1

// set event listeners
document.getElementById("0").addEventListener("click", function(){tictac(0)})
document.getElementById("1").addEventListener("click", function(){tictac(1)})
document.getElementById("2").addEventListener("click", function(){tictac(2)})
document.getElementById("3").addEventListener("click", function(){tictac(3)})
document.getElementById("4").addEventListener("click", function(){tictac(4)})
document.getElementById("5").addEventListener("click", function(){tictac(5)})
document.getElementById("6").addEventListener("click", function(){tictac(6)})
document.getElementById("7").addEventListener("click", function(){tictac(7)})
document.getElementById("8").addEventListener("click", function(){tictac(8)})

function tictac(cell) {
    if (board[cell] == null) {
        if (turn == 1) {
            board[cell] = "X"
            document.getElementById(cell).innerHTML = "X"
            checkForWin()
            turn = 2
        } else {
            board[cell] = "O"
            document.getElementById(cell).innerHTML = "O"
            checkForWin()
            turn = 1
        }
    }
}

function checkForWin() {
    // check columns
    for (i=0; i<3; i++) {
        if (board[0 + i] == board[3 + i] && board[3 + i] == board[6 + i] && board[0 + i] !== undefined) {
            alert("Player " + turn + " wins!") 
            clearBoard()
        }
    }

    // check rows
    for (i=0; i<7; i+= 3) {
        if (board[0 + i] == board[1 + i] && board[1 + i] == board[2 + i] && board[0 + i] !== undefined) {
            alert("Player " + turn + " wins!") 
            clearBoard()
        }
    }

    // check diagonals
    if (board[0] == board[4] && board[4] == board[8] && board[0] !== undefined) {
        alert("Player " + turn + " wins!") 
        clearBoard()
    }
    if (board[2] == board[4] && board[4] == board[6] && board[2] !== undefined) {
        alert("Player " + turn + " wins!") 
        clearBoard()
    }
}

function clearBoard() {
    for (i=0; i<9; i++) {
        document.getElementById(i).innerHTML = ""
        board[i] = undefined
    }
}