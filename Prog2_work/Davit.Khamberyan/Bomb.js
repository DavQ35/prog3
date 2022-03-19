module.exports = class Bomb {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.time = 3
        this.directions = []
        if (matrix[this.y][this.x] == 1) {
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1)
                }
            }
        }
        else if (matrix[this.y][this.x] == 2) {
            for (var i in grass_eaters) {
                if (this.x == grass_eaters[i].x && this.y == grass_eaters[i].y) {
                    grass_eaters.splice(i, 1)
                }
            }
        }
        else if (matrix[this.y][this.x] == 3) {
            for (var i in eater_eaters) {
                if (this.x == eater_eaters[i].x && this.y == eater_eaters[i].y) {
                    eater_eaters.splice(i, 1)
                }

            }
        }
        else if (matrix[this.y][this.x] == 0) {

        }
        matrix[this.y][this.x] = 4
        bombs.push(this)
    }

    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
        ]
    }

    chooseCell() {
        this.getNewDirections()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                found.push(this.directions[i]);

            }

        }
        return found;

    }

    booom() {
        if (this.time == 3) {
            matrix[this.y][this.x] = 4
            this.time--
        }
        else if (this.time == 2) {
            matrix[this.y][this.x] = 5
            this.time--
        }
        else if (this.time == 1) {
            matrix[this.y][this.x] = 6
            this.time--
        }
        else if (this.time == 0) {
            this.super_boom()
        }
    }
  

    super_boom() {
        var cords = this.chooseCell()
        for (let t = 0; t < 100; t++) {
            for (let i = 0; i < 8; i++) {
                var x = cords[i][0]
                var y = cords[i][1]
                if (matrix[y][x] == 0) {
                    matrix[y][x] = 7
                }
                if (matrix[y][x] == 1) {
                    for (var g in grassArr) {
                        if (grassArr[g].x == x && grassArr[g].y == y) {
                            grassArr.splice(g, 1)
                            matrix[y][x] = 7
                        }
                    }
                }
                else if (matrix[y][x] == 2) {
                    for (var g in grass_eaters) {
                        if (grass_eaters[g].x == x && grass_eaters[g].y == y) {
                            grass_eaters.splice(g, 1)
                            matrix[y][x] = 7
                        }
                    }
                }
                else if (matrix[y][x] == 3) {
                    for (var g in eater_eaters) {
                        if (eater_eaters[g].x == x && eater_eaters[g].y == y) {
                            eater_eaters.splice(g, 1)
                            matrix[y][x] = 7
                        }
                    }
                }




                matrix[this.y][this.x] = 7

                for (var g in bombs) {
                    if (bombs[g].x == this.x && bombs[g].y == this.y) {
                        bombs.splice(g, 1)
                    }
                }

            }

        }
    }
}