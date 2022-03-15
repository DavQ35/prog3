var matrix = [];

var side = 20
var grassArr = []
var grass_eaters = []
var eater_eaters = []
var bombs = []
var bomb_eaters = []
var l = 0
var l2 = 0

function generator(matrixsize, grasscount, grasseatercount, grasseatercountaa) {

    for (let i = 0; i < matrixsize; i++) {
        matrix[i] = []
        for (let p = 0; p < matrixsize; p++) {
            matrix[i][p] = 0
        }
    }
    for (let i = 0; i < grasscount; i++) {
        var x = Math.floor(random(matrixsize))
        var y = Math.floor(random(matrixsize))
        matrix[y][x] = 1
    }
    for (let i = 0; i < grasseatercount; i++) {
        var x = Math.floor(random(matrixsize))
        var y = Math.floor(random(matrixsize))
        matrix[y][x] = 2
    }
    for (let i = 0; i < grasseatercountaa; i++) {
        var x = Math.floor(random(matrixsize))
        var y = Math.floor(random(matrixsize))
        matrix[y][x] = 3
    }

}

// new Grass_eater(1,2)
// new Grass_eater(1,1)
// new Grass_eater(2,1)
// new Grass_eater(1,3)
// new Grass_eater(3,1)
// new Grass_eater(3,3)
// new Grass_eater(3,2)
// new Grass_eater(2,3)

function setup() {
    frameRate(7)
    //generator(5, 0, 0, 0)
    generator(25, 50, 50, 5)
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                new Grass(x, y)
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("orange");
                new Grass_eater(x, y)

            }
            else if (matrix[y][x] == 3) {
                fill("red");
                new Eater_eater(x, y)
            }
        }
    }
}

function Boom(matrixsize) {
    var x = Math.floor(random(matrixsize))
    var y = Math.floor(random(matrixsize))

    if (x == 0 || y == 0 || x == matrixsize - 1 || y == matrixsize - 1 || x == 1 || y == 1 || x == matrixsize - 2 || y == matrixsize - 2) {

    }
    else {
        new Bomb(x, y)

    }


}

function bomb_eater_spawn(ms) {
    var x = Math.floor(random(ms))
    var y = Math.floor(random(ms))

    if (matrix[y][x] == 7) {
        new Bomb_eater(x, y)

    }
    else {

    }
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("orange");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("#33302b");
            }
            else if (matrix[y][x] == 5) {
                fill("#7f5252");
            }
            else if (matrix[y][x] == 6) {
                fill("#E434db");
            }
            else if (matrix[y][x] == 7) {
                fill("#a25d5d");
            }
            else if (matrix[y][x] == 8) {
                fill("#bbff00");
            }


            rect(x * side, y * side, side, side);
        }
    }


    for (var g in grassArr) {
        grassArr[g].mul()
    }
    for (var g in grass_eaters) {
        grass_eaters[g].eat()
    }
    for (var g in eater_eaters) {
        eater_eaters[g].eat()
    }
    if (l == 1) {
        Boom(matrix.length)
        l = 0
        for (var g in bombs) {
            bombs[g].booom()
        }
    }
    else {

        l++
    }
    if (l2 == 10) {
        bomb_eater_spawn(matrix.length)
        l2 = 0
        for (var g in bomb_eaters) {
            bomb_eaters[g].eat()
        }
    }
    else {
        l2++
    }

}









