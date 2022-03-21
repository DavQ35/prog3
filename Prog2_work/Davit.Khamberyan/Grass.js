var live = require('./starter');
module.exports = class Grass extends live {

    constructor(x, y) {
        super(x, y);
        matrix[this.y][this.x] = 1
        grassArr.push(this);
    }

    mul() {
        const newcell = Math.random(this.chooseCell(0))

        if (newcell) {
            var x = newcell[0]
            var y = newcell[1]
            if (matrix[y][x] == 7) {
                for (var i in grassArr) {
                    if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                        grassArr.splice(i, 1)
                    }
                }

            }
            else {
                const newGrass = new Grass(x, y)
                grassArr.push(newGrass)
                this.multiplay = 0
                matrix[y][x] = 1
            }
        }
    }
}
