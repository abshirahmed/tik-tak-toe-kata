export class Grid {
    grid
    constructor(grid: string[][]) {
        this.grid = grid
    }
}

export default class TicTacToe {
    start():Grid{
        const defaultGrid = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
        return new Grid(defaultGrid)
    }

    play(playerSymbol: string, coordinates: object) {
        if (playerSymbol !== 'X') throw new Error();
    }
}