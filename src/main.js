// import createBoard from './grille.js';
// import jouer from './pion.js';
// import checkWin from './winStatus.js';
// import resetGame from './resetGame.js';

const {createBoard} = require('./grille.js');
const {jouer} = require('./pion.js');
const {checkWin} = require('./winStatus.js');
const {resetGame} = require('./resetGame.js');

const startbutton = document.getElementById('start-button');
const board = document.getElementById('board');
const cells = [];
const rows = 6;
const cols = 7;
let currentPlayer = 'Rouge';
const turnNumber = document.getElementById('turn-number');
const currentPlayerInfo = document.getElementById('current-player');
let currentTurn = 1;
const resetButton = document.getElementById('reset-button');
let gameOver = false;
let scoreRouge = 0;
let scoreJaune = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'Rouge' ? 'Jaune' : 'Rouge';
    currentPlayerInfo.textContent = `Current Player: ${currentPlayer}`;
}

startbutton.addEventListener('click', () => {
    createBoard(rows, cols, cells, board);
    startbutton.remove();
    document.getElementById("turn-info").hidden = false;
    document.getElementById("score").hidden = false;

    cells.forEach((cell) => {
        cell.addEventListener('click', () => {
            if (gameOver){
                return;
            }
            const col = parseInt(cell.getAttribute('data-col'));
            const row = jouer(col, rows, cells, cols, currentPlayer);
            console.log('le joueur à placé un jeton dans la case : ' + row + ' ' + col + '');
            if (row === -1) return;

            if (checkWin(row, col, currentPlayer, rows, cols, cells)) {
                sleep(200).then(() => {
                    alert(`Le joueur ${currentPlayer} a gagné !\nVeuillez cliquer sur le bouton "Reinitialiser" pour rejouer`);
                    console.log(`Le joueur ${currentPlayer} a gagné !`);
                    currentPlayer === 'Rouge' ? scoreRouge++ : scoreJaune++;
                    document.getElementById("scoreRouge").textContent = scoreRouge;
                    document.getElementById("scoreJaune").textContent = scoreJaune;
                    gameOver = true;
                });
            } else {
                currentTurn++;
                turnNumber.textContent = currentTurn;
                if (currentTurn > rows * cols) {
                    alert("Match nul !\nVeuillez cliquer sur le bouton \"Reinitialiser\" pour rejouer");
                    console.log("Match nul !");
                    gameOver = true;
                } else{
                    switchPlayer();
                    console.log(cell)
                }
                // switchPlayer();
            }
        });
    });
    currentPlayerInfo.textContent = `Current Player: ${currentPlayer}`;
});

resetButton.addEventListener('click', () => {
    currentTurn = resetGame(cells, currentTurn, turnNumber);
    gameOver = false;
});
