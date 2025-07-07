console.log('ready player 1')

// -- Core Game Logic -- //

function generateBoard() {
  // Create the 2D array representing the board
  // Populate bombs, numbers, blanks
  // Return the board array
}

function generateGameBoardUI(board) {
  // Iterate board array
  // Create HTML buttons/divs with tile-id attributes for linking UI & data
  // Apply CSS Grid container and styles
}

function getAllNeighbors(tile, board) {
  // Return an array of valid neighbor tiles for given tile
}

function revealBlankArea(tile, board, visited = new Set()) {
  // Recursive reveal of blank tiles and bordering numbers
}

// -- Event Handlers -- //

function handleTileClick(tile, board) {
  // If flagged, ignore left click
  // If bomb, trigger game over
  // If number, reveal number
  // If blank, run revealBlankArea
}

function handleFlagTile(tile) {
  // Toggle flagged state
}

function resetGame() {
  // Reset all variables, regenerate board and UI
}

// -- Debug Helpers -- //

function revealAllBlanks(board) {}
function revealAllNumbers(board) {}
function revealAllBombs(board) {}
function revealAll(board) {}

