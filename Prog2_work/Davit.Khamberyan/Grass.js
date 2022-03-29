var LivingCreature = require('./starter');
module.exports = class Grass extends LivingCreature {

    constructor(x, y) {
        super(x, y);
        matrix[this.y][this.x] = 1
        grassArr.push(this);
        super.multiplay = 4;
    }
 
    mul() {
        if(this.multiplay == 0){
        let newcell = this.chooseCell(0);
        if (newcell) { 
            var x = newcell[0]
            var y = newcell[1]
            const newGrass = new Grass(x, y)
            grassArr.push(newGrass)
            this.multiplay = 4 
            matrix[y][x] = 1
            }
        }
        else{this.multiplay--}
    } 
} 
 
    