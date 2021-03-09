describe('Tic Tac Toe Calisthenics', ()=>{
    it('should create an empty matrix when start is called', ()=>{
        const ticTacToe = new TicTacToe();

        expect(ticTacToe.start()).toBeInstanceOf([]);
    })
})