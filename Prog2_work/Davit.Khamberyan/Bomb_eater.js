class Bomb_eater{
    constructor(x,y){
        this.x = x
        this.y = y
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
        matrix[this.y][this.x] = 8
        bomb_eaters.push(this)
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

    eat(){
        var cords = random(this.chooseCell(7))

        if (cords) {
            var x = cords[0]
            var y = cords[1]
        
            matrix[y][x] = 8
            matrix[this.y][this.x] = 0

            this.x = x
            this.y = y

        }
        else{
            for (var g in bomb_eaters) {
                if (bomb_eaters[g].x == this.x && bomb_eaters[g].y == this.y) {
                    bomb_eaters.splice(g, 1)
                    matrix[this.y][this.x] = 0
                }
            }
            
        }

        
    }
}