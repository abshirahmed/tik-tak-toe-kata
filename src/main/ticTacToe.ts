export class Grid {
    plane: string[][];

    constructor() {
        this.plane = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
    }

    setPlane(coordinates: { x: number, y: number }, value: string) {
        const xCoordinate = coordinates.x - 1;
        const yCoordinate = coordinates.y - 1;
        this.plane[xCoordinate][yCoordinate] = value
    }

    printPlane(){
        console.log(this.plane)
        return this.plane
    }
}

export default class TicTacToe {
    private nextPlayer = 'X'
    private grid = new Grid()

    start(): Grid {
        return this.grid
    }

    play(playerSymbol: string, coordinates: { x: number, y: number }) {
        if (this.nextPlayer !== playerSymbol) throw new Error();
        this.grid.setPlane(coordinates, playerSymbol)
        this.nextPlayer = playerSymbol === 'X' ? 'O' : 'X'
        return this.grid.printPlane();
    }
}