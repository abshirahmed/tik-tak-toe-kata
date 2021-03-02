export interface Coordinates {
    x: number,
    y: number
}

export default class TicTacToe {
    readonly grid = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]

    private nextPlayer = 1

    start() {
        return 'Player 1\'s turn'
    }

    checkWinner() {
        return 'No winner yet!';
    }

    playerMove(player: number, {x, y}: Coordinates) {
        const xPosition = x - 1;
        const yPosition = y - 1;

        if (this.grid[xPosition][yPosition]) {
            throw new Error('Error: this position is already taken');
        }

        if (player !== this.nextPlayer) {
            throw new Error('Error: It is not your turn');
        }

        if (xPosition < 0 || xPosition > 2 || yPosition < 0 || yPosition > 2) {
            throw new Error('Error: Move is out of bounds');
        }

        if (player === 1 && this.nextPlayer === 1) {
            this.grid[xPosition][yPosition] = 'X';
            this.nextPlayer = 2;
            return 'Player 2\'s turn';
        }

        if (player === 2 && this.nextPlayer === 2) {
            this.grid[xPosition][yPosition] = 'Y';
            this.nextPlayer = 1;
            return 'Player 1\'s turn'
        }
    }
}