export default function resetGame(cells,currentTurn, turnNumber) {
    cells.forEach((cell) => {
        cell.classList.remove('player1', 'player2', 'filled');
    });
    currentTurn = 1;
    turnNumber.textContent = currentTurn;
}