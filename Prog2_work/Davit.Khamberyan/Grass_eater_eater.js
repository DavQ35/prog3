class Eater_eater extends LivingCreature {

    constructor(x, y) {
        super(x, y);
        matrix[this.y][this.x] = 3
        eater_eaters.push(this)

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
        else {
            this.energy -= 2
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


