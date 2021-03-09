import TicTacToe, { Grid } from '../main/ticTacToe';

describe('Tic Tac Toe Calisthenics', () => {
    it('should create an empty matrix when start method is called', () => {
        const ticTacToe = new TicTacToe();

        const grid = ticTacToe.start();

        expect(grid).toBeInstanceOf(Grid);
    })

    it("should throw an error when no arguments are passed to the play method", () => {
        const ticTacToe = new TicTacToe();

        const grid = ticTacToe.start();

        expect(()=> ticTacToe.play()).toThrowError()
    })
})