export default function jouer(col,rows,cells,cols,currentPlayer) {
    for (let row = rows - 1; row >= 0; row--) {
        const cell = cells[row * cols + col];
        if (!cell.classList.contains('filled')) {
            cell.classList.add(currentPlayer, 'filled');
            return row;
        }
    }
    return -1;
}