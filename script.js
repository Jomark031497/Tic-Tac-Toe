/* Conditions

    1. Store the gameboard as an array inside a gameboard object
    2. Players are stored in an object
    3. game flow control is an object
    4. main goal is to have as little global code as possible.
    5. try to tuck everything on modules and factories.
        a. RULE OF THUMB: if you need One of something: module.
            if you need multiple of something: factory
    6. Build the functions that allow players to add marks to a specific spot on the board.
    7. Build the logic that checks for when the game is over! Should check for 3-in-a-row 
        and a tie.
    8. Clean up the interface to allow players to put in their names, include a button to 
        start/restart the game and add a display element that congratulates the winning player!
    9. 

*/

/* My Plan

    1. A function which will create the board using DOM
    2. clear the board, and set the first player to move
    3. if the player clicks on a specific cell, mark it with the sprite
    4. check if the player has the winning combinations, if not, player two will move


*/





const Game = () => {

    let turnCount = 0;
    
    const getPlayerNames = () => {

        let playerOneName = prompt("Enter Player Name(X)");
        let playerTwoName = prompt("Enter Player Name(O)");

        const playerOne = playerFactory(playerOneName, "X");
        const playerTwo = playerFactory(playerTwoName, "O");

        return{playerOne,playerTwo};
    };

    const checkVictory = (player,moveHistory) => {

        let winConditions = [[1,2,3], [4,5,6], [7,8,9], 
                            [1,4,7],[2,5,8], [3,6,9], [1,5,9], [3,5,7]]; 
                
        turnCount >= 9 ? console.log("Tie!") : console.log("tuloy");

        for(let i = 0; i < winConditions.length; i++){

            console.log(winConditions[i],moveHistory);
            if(winConditions[i].includes(moveHistory)){

                console.log("WIN!");
            }
        }

    };

    const gameTurn = (p1,p2) => {

        turnCount += 1;

        let currentPlayer = turnCount % 2 == 1 ? p1:p2;
        checkVictory(p1, p1.moveHistory);
        checkVictory(p2, p2.moveHistory);
 

    };

    const getPlayers = (() => {

        let players = getPlayerNames();
        
        let player1 = players.playerOne;
        let player2 = players.playerTwo;

        gameTurn(player1,player2);

    })();

   
  

    const createBoard = () => {

        const boardContainer = document.querySelector('.board-container');
    
        for (let i = 0; i < 3 * 3; i++) {
    
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = i + 1;
            boardContainer.appendChild(cell);
    
        };
    };
    
    


};

const playerFactory = (name, sprite) => {

    let moveHistory = [1,2,3];
    return { name, sprite, moveHistory };
};

Game();












