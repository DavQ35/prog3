class Eater_eater {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiplay = 0;
        this.energy = 50;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

        matrix[this.y][this.x] = 3
        eater_eaters.push(this)

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
            [this.x + 1, this.y + 1]
        ];
    }
    

    chooseCell(character) {
        this.getNewDirections()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;

    }

    eat() {

        var newcell = random(this.chooseCell(2))
        
        if (newcell) {
            var x = newcell[0]
            var y = newcell[1]

            for (var i in grass_eaters) {
                if (x == grass_eaters[i].x && y == grass_eaters[i].y) {
                    grass_eaters.splice(i, 1)
                }
            }
            
            matrix[y][x] = 3
            matrix[this.y][this.x] = 0

            this.x = x
            this.y = y

            this.energy += 5

            if (this.energy >= 55) {
                this.mul()
            }

        }
        else {
            this.move()
        }

    }

    mul() {
        var newcell = random(this.chooseCell(0))

        if (newcell) {
            var x = newcell[0]
            var y = newcell[1]
            var res = new Eater_eater(x, y)
            matrix[y][x] == 3
            grass_eaters.push(res)
            this.energy = 10
        }
    }

    move() {
        var newcell = random(this.chooseCell(0))

        if (newcell) {
            var x = newcell[0]
            var y = newcell[1]
            matrix[y][x] = 3
            matrix[this.y][this.x] = 0

            this.x = x
            this.y = y
            this.energy -= 3
            if (this.energy <= 0) {
                this.die()
            }
        }
        else{
            this.energy -=2
        }
        if (this.energy <= 0) {
            this.die()
        }

    }

    die() {
        for (var i in eater_eaters) {
            if (this.x == eater_eaters[i].x && this.y == eater_eaters[i].y) {
                eater_eaters.splice(i, 1)
            }

        }
        matrix[this.y][this.x] = 0
    }




}


