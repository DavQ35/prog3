class Grass_eater extends LivingCreature {

    constructor(x, y) {
        super(x, y);
        matrix[this.y][this.x] = 2
         this.energy = 10;
        grass_eaters.push(this)
    }
    eat() {

        const newcell = random(this.chooseCell(1))


        if (newcell) {

            var x = newcell[0]
            var y = newcell[1]
            
            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1)
                }
            }


            matrix[y][x] = 2
            matrix[this.y][this.x] = 0

            this.x = x
            this.y = y

            this.energy += 5
            this.multiplay = 0

            if (this.energy >= 35) {
                this.mul()
            }

        }
        else {
            this.move()
            this.multiplay++
        }

    }

    mul() {
        var newcell = random(this.chooseCell(0))
        if (newcell) {
            console.log()
            var x = newcell[0]
            var y = newcell[1]
            var res = new Grass_eater(x, y)
            matrix[y][x] == 2
            grass_eaters.push(res)
            this.energy = 10
        }
    }

    move() {

        var newcell = random(this.chooseCell(0))

        if (newcell) {
            var x = newcell[0]
            var y = newcell[1]
            matrix[y][x] = 2
            matrix[this.y][this.x] = 0
            this.x = x
            this.y = y
            this.energy--
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
        for (var i in grass_eaters) {
            if (this.x == grass_eaters[i].x && this.y == grass_eaters[i].y) {

                grass_eaters.splice(i, 1)

            }

        }
        matrix[this.y][this.x] = 0
    }




}


