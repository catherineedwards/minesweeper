document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {};

function createBoard(boardSize) {
  var newBoard = {};
  newBoard.cells = [];
  //creates a token for setting a cells to be a mine
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      var randomNumber = Math.floor(Math.random() * 100);
      var isThisCellAMine = false
      if (randomNumber >= 80) {
        isThisCellAMine = true
      }
      var newCell = createNewCell(isThisCellAMine, i, j);
      newBoard.cells.push(newCell);
    }
  }
  return newBoard
}

//loops through creating cells to populate the board
function createNewCell(isThisCellAMine, rowNum, colNum) {
  var cell =
  {
    row: rowNum,
    col: colNum,
    isMine: isThisCellAMine,
    hidden: true,
    isMarked: false
  }
  return cell
}

function startGame() {
  // Don't remove this function call: it makes the game work!

  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu', checkForWin);
  board = createBoard(5);


  // This is a loop that looks in all of the cells objects,
  // calls the countSurroundingMines function
  // (a function which is defined further in the minesweeper.js file)
  // and assigns the result of that function
  // to the surroundingMines property of each cells.

  for (let i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {


  for (let i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine == true && board.cells[i].isMarked == false) {

      return false
    };
  }



  for (let i = 0; i < board.cells.length; i++) {
    if (board.cells[i].hidden == true && board.cells[i].isMine == false) {
      return false
    };
  }

  lib.displayMessage('You win!')
  return true
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cells
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cells.row, cells.col)
//
// It will return cells objects in an array. You should loop through 
// them, counting the number of times `cells.isMine` is true.
function countSurroundingMines(cells) {

  var surrounding = lib.getSurroundingCells(cells.row, cells.col)
  var count = 0;

  for (let i = 0; i < surrounding.length; i++) {

    if (surrounding[i].isMine == true) {

      count++;

    };

  }
  return count
}

