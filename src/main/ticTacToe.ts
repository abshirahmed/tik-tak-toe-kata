export class Grid {
    grid
    constructor(grid: string[][]) {
        this.grid = grid
    }
}

export default class TicTacToe {
    private nextPlayer="X"
    start():Grid{
        const defaultGrid = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
        return new Grid(defaultGrid)
    }

    play(playerSymbol: string, coordinates: object) {
        if (this.nextPlayer !== playerSymbol) throw new Error();
        this.nextPlayer="O";
    }
}