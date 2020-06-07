
const createPlayer = (name, sprite) => {

    let moveHistory = [];
    return { name, sprite, moveHistory };
};


const Game = () => {

    let turnCount = 0;
    let gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let currentPlayer;
    let currentSprite;
    let player1;
    let player2;

    //references
    let boardContainer = document.querySelector(".board-container");
    let playerContainer = document.querySelector(".players");


    const checkWin = () => {

        //const sortMoves = moveHistory.sort((a, b) => a - b);

        if(gameBoard[0] === currentSprite && gameBoard[1] === currentSprite && gameBoard[2] === currentSprite){
            console.log("WIN!");
        }

        if(gameBoard[3] === currentSprite && gameBoard[4] === currentSprite && gameBoard[5] === currentSprite){
            console.log("WIN!");
        }

        if(gameBoard[6] === currentSprite && gameBoard[7] === currentSprite && gameBoard[8] === currentSprite){
            console.log("WIN!");
        }

    }

  
    const getMove = (player, move) => {

        let moveToInt = parseInt(move);
        player.moveHistory.push(moveToInt);
        let moveIndex = gameBoard.indexOf(moveToInt);
        gameBoard.splice(moveIndex, 1, player.sprite);

        checkWin();
        gameTurn();

    };

    //Create the gameboard
    const renderBoard = () => {

        boardContainer.innerHTML = "";
        for (i in gameBoard) {

            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.textContent = gameBoard[i];
            cell.addEventListener("click", function (e) {

                let move = e.target.innerText;
                getMove(currentPlayer, move);
            });

            boardContainer.appendChild(cell);
        }

    };


    //a function who will determine whos the current player
    const gameTurn = () => {

        renderBoard();
        turnCount++;
        currentPlayer = turnCount % 2 == 1 ? player1 : player2;
        currentSprite = currentPlayer.sprite;
        console.log(currentSprite);


    };


    //Get the Names of the player
    const getPlayerNames = (() => {

        let p1Name = prompt("Enter Name (X)");
        let p2Name = prompt("Enter Name (O)");


        //create instances of player 1 and 2
        player1 = createPlayer(p1Name, "X");
        player2 = createPlayer(p2Name, "O");

        let p1Display = document.createElement("div");
        p1Display.classList.add("player");
        p1Display.textContent = `${p1Name}`;

        let p2Display = document.createElement("div");
        p2Display.classList.add("player");
        p2Display.textContent = `${p2Name}`;


        playerContainer.appendChild(p1Display);
        playerContainer.appendChild(p2Display);

        gameTurn();

    })();





};

Game();