import TicTacToe from '../main/ticTacToe';

// X goes first
// Players alternate turns
// Can't play on played position
// 3Xs or 3Os vertically, horizontally, diagonally to win
// 9 squares filled without a win = draw

// const grid = [
//     ['','',''],
//     ['','',''],
//     ['','','']
// ]

describe('Tic Tak Toe', () => {
    it('should return Player 1\'s turn when the game starts', () => {
        const ticTacToe = new TicTacToe();

        expect(ticTacToe.start()).toBe('Player 1\'s turn');
    })

    it('should return Player 2\'s turn when Player 1 makes a move', () => {
        const ticTacToe = new TicTacToe();

        ticTacToe.start();

        expect(ticTacToe.playerMove(1, {x: 1, y: 2})).toBe('Player 2\'s turn');
    })

    it('grid should contain Player 1\'s coordinates', () => {
        const ticTacToe = new TicTacToe();

        ticTacToe.start();
        ticTacToe.playerMove(1, {x: 1, y: 2});

        expect(ticTacToe.grid[0][1]).toBe('X');
    })

    it('grid should contain Player 2\'s coordinates', () => {
        const ticTacToe = new TicTacToe();

        ticTacToe.start();
        ticTacToe.playerMove(1, {x: 1, y: 2});

        expect(ticTacToe.playerMove(2, {x: 1, y: 1})).toBe('Player 1\'s turn')
        expect(ticTacToe.grid[0][1]).toBe('X');
        expect(ticTacToe.grid[0][0]).toBe('Y');
    })

    it('should throw an error when the position in the grid is taken', () => {
        const ticTacToe = new TicTacToe();

        ticTacToe.start();
        ticTacToe.playerMove(1, {x: 1, y: 2});

        expect(() => ticTacToe.playerMove(2, {x: 1, y: 2})).toThrow('Error: this position is already taken')
    })

    it('should throw an error when player has 2 consecutive moves', () => {
        const ticTacToe = new TicTacToe();

        ticTacToe.start();
        ticTacToe.playerMove(1, {x: 1, y: 2});

        expect(() => ticTacToe.playerMove(1, {x: 1, y: 1})).toThrow('Error: It is not your turn')
    })

    it('should throw an error when the move is out of bounds', () => {
        const ticTacToe = new TicTacToe();

        ticTacToe.start();

        expect(() => ticTacToe.playerMove(1, {x: 1, y: 4})).toThrow('Error: Move is out of bounds')
    })

    it.skip('checkWinner() should return "No winner yet!" when the game starts', () => {
        const ticTacToe = new TicTacToe();

        ticTacToe.start();

        expect(ticTacToe.checkWinner()).toBe('No winner yet!');
    })
})
