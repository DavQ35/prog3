var live = require('./starter');
module.exports = class Bomb_eater extends live {
    constructor(x, y) {
        super(x, y)
        matrix[this.y][this.x] = 8
        bomb_eaters.push(this)
    }


    eat() {
        var cords = Math.random(this.chooseCell(7))

        if (cords) {
            var x = cords[0]
            var y = cords[1]

            matrix[y][x] = 8
            matrix[this.y][this.x] = 0

            this.x = x
            this.y = y

        }
        else {
            for (var g in bomb_eaters) {
                if (bomb_eaters[g].x == this.x && bomb_eaters[g].y == this.y) {
                    bomb_eaters.splice(g, 1)
                    matrix[this.y][this.x] = 0
                }
            }

        }


    }
}