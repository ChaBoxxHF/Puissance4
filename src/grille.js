export default function createBoard(rows,cols,cells,board) {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('data-row', row);
            cell.setAttribute('data-col', col);
            board.appendChild(cell);
            cells.push(cell);
        }
    }
}
// module.exports = createBoard;