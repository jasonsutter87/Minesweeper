console.log('ready player 1')

let gameBoard = []
let gameDifficulty = []



let init = () => {
    //ask player how big the board size is.
    gameDifficulty = setGameDifficulty()

    //generate 2d board
    generateBoard()

    //generate game board
    generateGameBoardUI(gameBoard)
}

let setGameDifficulty = () =>{
    //trigger modal

    //the value of the form will be the return
    return ['easy', '9']
}


function generateBoard() {
    count = 1;
    
    // Create the 2D array representing the board
    for(var x = 0; x < gameDifficulty[1]; x++){
        let row = [];
        for(var y = 0; y < gameDifficulty[1]; y++){
            row.push(
                {
                    id: count,
                    row: x,
                    col: y,
                    flagged: false,
                    isBomb: false,
                    number: null
                  }
             )
             count++;
        }
        gameBoard.push(row);
    }

    // Populate bombs
    gameBoard = generateBombs(gameBoard);
    console.log(gameBoard)

    // Populate numbers
    gameBoard = generateNumbers(gameBoard);

    return gameBoard;
}


let generateBombs = (board) => {
    const size = parseInt(gameDifficulty[1]); 
    const totalTiles = size * size;
    const totalBombs = Math.floor(totalTiles * 0.15); 
    const bombIds = new Set();

    // Generate unique random IDs
    while (bombIds.size < totalBombs) {
        const rand = Math.floor(Math.random() * totalTiles) + 1; 
        bombIds.add(rand); 
    }

    // Set isBomb = true for matching tiles
    for (let row of board) {
        for (let tile of row) {
            if (bombIds.has(tile.id)) {
                tile.isBomb = true;
            }
        }
    }

    return board;
};


let generateNumbers = (board) => {
    const size = parseInt(gameDifficulty[1]);

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const tile = board[row][col];

            // Skip if this tile is a bomb
            if (tile.isBomb) continue;

            let bombCount = 0;

            // Check all 8 neighbors
            for (let dx = -1; dx <= 1; dx++) {
                for (let dy = -1; dy <= 1; dy++) {
                    if (dx === 0 && dy === 0) continue; // Skip self

                    const newRow = row + dx;
                    const newCol = col + dy;

                    // Check bounds
                    if (
                        newRow >= 0 && newRow < size &&
                        newCol >= 0 && newCol < size
                    ) {
                        const neighbor = board[newRow][newCol];
                        if (neighbor.isBomb) {
                            bombCount++;
                        }
                    }
                }
            }

            // If any bombs found, assign the number
            if (bombCount > 0) {
                tile.number = bombCount;
                tile.isNumber = true;
            }
        }
    }

    return board;
};


function generateGameBoardUI(board) {
    // Iterate board array
    for (let row of board) {
        for (let tile of row) {
            $('#game-container').append(`
                <button class="tile" 
                        data-id="${tile.id}" 
                        data-row="${tile.row}" 
                        data-col="${tile.col}">
                </button>
              `);
        }
    }
}

let getAllNeighbors = (tile, board) => {
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



//runner
init()
