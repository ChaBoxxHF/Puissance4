const {jouer} = require('../src/pion');

describe('Test de la fonction jouer', () => {
    test('La fonction devrait remplir la première case de la colonne', () => {
        const col = 0;
        const rows = 6;
        const cells = Array(6 * 7).fill(0).map(() => ({
          classList: {
            contains: className => className === 'filled',
            add: className => {}
          }
        }));
        const cols = 7;
        const currentPlayer = 'player1';
        const result = jouer(col, rows, cells, cols, currentPlayer);
        expect(result).toBe(rows - 1);
      });
  
    test('La fonction devrait retourner -1 lorsque la colonne est déjà pleine', () => {
      const col = 2;
      const rows = 6;
      const cells = Array(6 * 7).fill({ classList: { contains: className => className === 'filled' } });
      const cols = 7;
      const currentPlayer = 'player2';
      const result = jouer(col, rows, cells, cols, currentPlayer);
      expect(result).toBe(-1);
    });
  });