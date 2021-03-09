import TicTacToe, { Grid } from '../main/ticTacToe';

describe('Tic Tac Toe Calisthenics', () => {
    it('should create an empty matrix when start method is called', () => {
        const ticTacToe = new TicTacToe();

        const grid = ticTacToe.start();

        expect(grid).toBeInstanceOf(Grid);
    })

    it("should throw an error when player 1 is not 'X'", () => {
        const ticTacToe = new TicTacToe();

        ticTacToe.start();

        expect(() => ticTacToe.play('O', {x: 1, y: 2})).toThrowError()
    })

    it("should throw an error when player 2 is not 'O'", () => {
        const ticTacToe = new TicTacToe();

        ticTacToe.start();
        ticTacToe.play('X', {x: 1, y: 2})
        expect(() => ticTacToe.play('X', {x: 1, y: 3})).toThrowError()
    })

    it("should print the grid after each time", () => {
        const ticTacToe = new TicTacToe();

        ticTacToe.start();
        expect(ticTacToe.play('X', {x: 1, y: 2})).toMatchObject([
            ['', 'X', ''],
            ['', '', ''],
            ['', '', '']
        ]);

    })
})