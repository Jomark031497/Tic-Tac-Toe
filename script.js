
const createPlayer = (name, sprite) => {

    const playerWin = () => `${name} WINS!`

    return { name, sprite, playerWin };
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
    let resultContainer = document.querySelector(".result-container");



    const checkWin = (player) => {

        let result = document.createElement("div");
        result.classList.add("result");

        //check the middle cell
        if (gameBoard[4] === currentSprite) {

            if (gameBoard[3] === currentSprite && gameBoard[5] === currentSprite) {    //horizontal
                result.textContent = player.playerWin();
            }
            else if (gameBoard[8] === currentSprite && gameBoard[0] === currentSprite) {   //forward slash
                result.textContent = player.playerWin();
            }
            else if (gameBoard[6] === currentSprite && gameBoard[2] === currentSprite) {   //back slash
                result.textContent = player.playerWin();
            }
            else if (gameBoard[1] === currentSprite && gameBoard[7] === currentSprite) {   //Vertical
                result.textContent = player.playerWin();
            }
        }

        //check the top left corner
        if (gameBoard[0] === currentSprite) {
            if (gameBoard[1] === currentSprite && gameBoard[2] === currentSprite) {   // horizontal
                result.textContent = player.playerWin();
            } else if (gameBoard[3] === currentSprite && gameBoard[6] === currentSprite) { //vertical
                result.textContent = player.playerWin();
            }
        }

        //check the bottom right
        if (gameBoard[8] === currentSprite) {
            if (gameBoard[6] === currentSprite && gameBoard[7] === currentSprite) {   //horizontal
                result.textContent = player.playerWin();
            } else if (gameBoard[2] === currentSprite && gameBoard[5] === currentSprite) { //vertical
                result.textContent = player.playerWin();
            }
        }

        resultContainer.appendChild(result);


    }

    const restartGame = () => {

        gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        playerContainer.innerHTML = "";
        resultContainer.innerHTML = "";
        getPlayerNames();

    };




    const getMove = (player, move) => {

        let playerMove = parseInt(move);

        let moveIndex = gameBoard.indexOf(playerMove);
        gameBoard.splice(moveIndex, 1, player.sprite);

        checkWin(player);
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


    };

    const renderPlayers = (p1, p2) => {

        let p1Display = document.createElement("div");
        p1Display.classList.add("player");
        p1Display.textContent = `Player 1: ${p1}`;

        let p2Display = document.createElement("div");
        p2Display.classList.add("player");
        p2Display.textContent = `Player 2: ${p2}`;

        playerContainer.appendChild(p1Display);
        playerContainer.appendChild(p2Display);
    };


    //Get the Names of the player
    const getPlayerNames = () => {

        let p1Name = prompt("Enter Name (X)");
        let p2Name = prompt("Enter Name (O)");


        //create instances of player 1 and 2
        player1 = createPlayer(p1Name, "X");
        player2 = createPlayer(p2Name, "O");

        renderPlayers(p1Name, p2Name);



        gameTurn();

    };

    window.addEventListener("load", getPlayerNames);
    let resetBtn = document.querySelector(".reset-btn").addEventListener("click", restartGame);


};

Game();