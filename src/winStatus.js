module.exports.checkWin = function(row, col, currentPlayer,rows,cols,cells) {
    const directions = [
        { row: -1, col: 0 },
        { row: 0, col: 1 },
        { row: 1, col: 1 },
        { row: 1, col: -1 }
    ];
    const cellColor = currentPlayer;
    for (const direction of directions) {
        let count = 0;
        for (let i = -3; i <= 3; i++) {
            const checkRow = row + direction.row * i;
            const checkCol = col + direction.col * i;
            if (checkRow >= 0 && checkRow < rows && checkCol >= 0 && checkCol < cols) {
                const cell = cells[checkRow * cols + checkCol];
                if (cell.classList.contains(cellColor)) {
                    count++;
                    if (count === 4) {
                        return true;
                    }
                } else {
                    count = 0;
                }
            }
        }
    }
  
    return false;
}