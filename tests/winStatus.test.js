/**
 * @jest-environment jsdom
 */

const checkWin = require('../src/winStatus.js');
const config = require('../jest.config.js');

const fakeCells = (rows, cols) => {
  const cells = [];
  for (let i = 0; i < rows * cols; i++) {
    cells.push({ classList: { contains: jest.fn() } });
  }
  return cells;
};

describe('checkWin', () => {
  test('Victoire rouge verticale', () => {
    const rows = 6;
    const cols = 7;
    const currentPlayer = 'red';
    const cells = fakeCells(rows, cols);
    
    for (let i = 2; i <= 5; i++) {
      cells[i * cols + 3].classList.contains.mockReturnValueOnce(true);
    }

    const result = checkWin(4, 3, currentPlayer, rows, cols, cells);
    expect(result).toBe(true);
  });

  test('Victoire jaune horizontale', () => {
    const rows = 6;
    const cols = 7;
    const currentPlayer = 'yellow';
    const cells = fakeCells(rows, cols);
    
    for (let i = 1; i <= 4; i++) {
      cells[2 * cols + i].classList.contains.mockReturnValueOnce(true);
    }

    const result = checkWin(2, 3, currentPlayer, rows, cols, cells);
    expect(result).toBe(true);
  });

  test('Victoire rouge diagonale droite', () => {
    const rows = 6;
    const cols = 7;
    const currentPlayer = 'red';
    const cells = fakeCells(rows, cols);
    
    for (let i = 0; i <= 3; i++) {
      cells[i * cols + i].classList.contains.mockReturnValueOnce(true);
    }

    const result = checkWin(3, 3, currentPlayer, rows, cols, cells);
    expect(result).toBe(true);
  });

  test('Victoire jaune diagonale gauche', () => {
    const rows = 6;
    const cols = 7;
    const currentPlayer = 'yellow';
    const cells = fakeCells(rows, cols);
    for (let i = 0; i <= 3; i++) {
      cells[i * cols + (3 - i)].classList.contains.mockReturnValueOnce(true);
    }

    const result = checkWin(2, 3, currentPlayer, rows, cols, cells);
    expect(result).toBe(true);
  });

  test('égalité', () => {
    const rows = 6;
    const cols = 7;
    const currentPlayer = 'red';
    const cells = fakeCells(rows, cols);

    const result = checkWin(2, 3, currentPlayer, rows, cols, cells);
    expect(result).toBe(false);
  });
});
