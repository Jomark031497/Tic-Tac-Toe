
const createPlayer = (name, sprite) => {

    const moveHistory = [];

    return { name, sprite, moveHistory };

};

const Game = () => {

    const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //the gameboard in array form
    const gameContainer = document.querySelector('.board-container'); //reference to the board-container tag
    let player1;
    let player2;
    let currentPlayer;
    let turnCount = 0;

    const renderBoard = () => {    //A function which will render the contents of the gameboard

        gameContainer.innerHTML = "";
        for (let x = 1; x < gameBoard.length; x++) {

            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = gameBoard[x];
            cell.addEventListener("click", function (e) {

                let move = e.target.innerText;
                getMove(currentPlayer, move);
            });

            gameContainer.appendChild(cell);

        };
    };



    const getMove = (player, move) => {

        player.moveHistory.push(move);

        let index = gameBoard.indexOf(parseInt(move));
        gameBoard.splice(parseInt(index), 1, player.sprite);
        currentPlayer.moveHistory.sort((a, b) => a - b);
        gameTurn();
    }


    const gameTurn = () => {

        renderBoard();
        turnCount++;
        currentPlayer = turnCount % 2 == 1 ? player1 : player2;
        currentPlayer.moveHistory.sort((a, b) => a - b);
        checkVictory(player1.moveHistory);
        checkVictory(player2.moveHistory);
        console.log(`current player: ${currentPlayer.name}`);
        console.log(`sorted history: ${currentPlayer.moveHistory}`);

    };

    const checkVictory = (player) => {

        let winningCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
        [1, 4, 7], [1, 5, 9], [2, 5, 8], [3, 6, 9], [3, 5, 7]];


        for (let i = 0; i < winningCombinations.length; i++) {

            if (player.includes(winningCombinations[i][i])) {
                console.log("okay");
                if (player.includes(winningCombinations[i][i + 1])) {
                    console.log("okay");
                    if (player.includes(winningCombinations[i][i + 2])) {

                        console.log("exit");
                    }
                }

            }
        };


    };

    const getPlayerNames = (() => {  //Get the names of the players and create instance of player

        let p1name = prompt("Enter Name (X)");
        let p2name = prompt("Enter name (O)");
        player1 = createPlayer(p1name, "X");
        player2 = createPlayer(p2name, "O");

        gameTurn();

    })();

};



Game();