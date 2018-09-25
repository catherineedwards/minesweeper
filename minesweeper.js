document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

var board = {};


board.cells = [ 
  {
    row:0,
    col:0,
    isMine:false,
    hidden:true,
    isMarked:false
  }, 
  {
    row:0,
    col:1,
    isMine:false,
    hidden:true,
    isMarked:false
  },
  {
    row:0,
    col:2,
    isMine:false,
    hidden:true,
    isMarked:false
  },
  {
    row:1,
    col:0,
    isMine:true,
    hidden:true,
    isMarked:false
  },
  {
    row:1,
    col:1,
    isMine:true,
    hidden:true,
    isMarked:false
  },
  {
    row:1,
    col:2,
    isMine:true,
    hidden:true,
    isMarked:false
  },
  {
    row:2,
    col:0,
    isMine:false,
    hidden:true,
    isMarked:false
  },
  {
    row:2,
    col:1,
    isMine:false,
    hidden:true,
    isMarked:false
  },
  {
    row:2,
    col:2,
    isMine:false,
    hidden:true,
    isMarked:false
  }
];
console.log(board.cells.length);
for (let i = 0; i < board.cells.length; i++) {
  
    console.log(board.cells[i]);

}

function startGame () {
  // Don't remove this function call: it makes the game work!
  
  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu', checkForWin);

  // This is a loop that looks in all of the cell objects,
  // calls the countSurroundingMines function
  // (a function which is defined further in the minesweeper.js file)
  // and assigns the result of that function
  // to the surroundingMines property of each cell.

  for (let i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {


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

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
 
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0;

  for (let i = 0; i < surrounding.length; i++) {
 
    if (surrounding[i].isMine == true) {

      count++;

    };
   
  }
  return count
}

