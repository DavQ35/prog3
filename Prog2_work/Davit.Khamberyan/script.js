var socket = io();
var side = 20;


function setup() {
    frameRate(7) 
    createCanvas(25 * side, 25 * side)
    background('#acacac');
}

function nkarel(matrix) {
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
}


socket.on('send matrix', nkarel);








