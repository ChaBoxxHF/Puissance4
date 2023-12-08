module.exports.resetGame = function(cells,currentTurn, turnNumber,gameOver) {
    cells.forEach((cell) => {
        cell.classList.remove('Rouge', 'Jaune', 'filled');
    });
    currentTurn = 1;
    turnNumber.textContent = currentTurn;
    return currentTurn;
}