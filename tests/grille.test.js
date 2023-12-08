/**
 * @jest-environment jsdom
 */

const createBoard = require('../src/grille.js');

describe(
    'createBoard', () => {
  test('Créer un plateau de 2x2', () => {
    const cells = [];
    const board = document.createElement('div');
    createBoard(2, 2, cells, board);
    expect(cells.length).toBe(4);
    expect(board.querySelectorAll('.cell').length).toBe(4);
  });

  test('Créer un plateau de 3x3', () => {
    const cells = [];
    const board = document.createElement('div');
    createBoard(3, 3, cells, board);
    expect(cells.length).toBe(9);
    expect(board.querySelectorAll('.cell').length).toBe(9);
  });

  test('Créer un plateau de 0x0', () => {
    const cells = [];
    const board = document.createElement('div');
    createBoard(0, 0, cells, board);
    expect(cells.length).toBe(0);
    expect(board.querySelectorAll('.cell').length).toBe(0);
  });
});