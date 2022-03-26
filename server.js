var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);
var fs = require("fs");


app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3007);

var Grass = require('./Prog2_work/Davit.Khamberyan/Grass');
var Grass_eater = require('./Prog2_work/Davit.Khamberyan/Grass_eater');
var Eater_eater = require('./Prog2_work/Davit.Khamberyan/Grass_eater_eater');
var Bomb = require('./Prog2_work/Davit.Khamberyan/Bomb');
var Bomb_eater = require('./Prog2_work/Davit.Khamberyan/Bomb_eater');

matrix = [];
grassArr = []
grass_eaters = []
eater_eaters = []
bombs = []
bomb_eaters = []
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
       var x = Math.floor(Math.random(matrixsize))
       var y = Math.floor(Math.random(matrixsize))
       matrix[y][x] = 1
   }
   for (let i = 0; i < grasseatercount; i++) {
       var x = Math.floor(Math.random(matrixsize))
       var y = Math.floor(Math.random(matrixsize))
       matrix[y][x] = 2
   }
   for (let i = 0; i < grasseatercountaa; i++) {
       var x = Math.floor(Math.random(matrixsize))
       var y = Math.floor(Math.random(matrixsize))
       matrix[y][x] = 3
   }

}

generator(25, 50, 50, 5)

io.sockets.emit('send matrix', matrix);

function createObj(matrix){
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                //fill("green");
                new Grass(x, y)
            }
            else if (matrix[y][x] == 0) {
                //fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                //fill("orange");
                new Grass_eater(x, y)

            }
            else if (matrix[y][x] == 3) {
                //fill("red");
                new Eater_eater(x, y)
            }
        }
    }
    io.sockets.emit('send matrix', matrix);
}
createObj(matrix);

function game(){
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
   io.sockets.emit('send matrix', matrix);
 }
 
 setInterval(game, 1000);

function Boom(matrixsize) {
   var x = Math.floor(Math.random(matrixsize))
   var y = Math.floor(Math.random(matrixsize))

   if (x == 0 || y == 0 || x == matrixsize - 1 || y == matrixsize - 1 || x == 1 || y == 1 || x == matrixsize - 2 || y == matrixsize - 2) {

   }
   else {
       new Bomb(x, y)

   }

   io.sockets.emit('send matrix', matrix);
}

function bomb_eater_spawn(ms) {
   var x = Math.floor(random(ms))
   var y = Math.floor(random(ms))

   if (matrix[y][x] == 7) {
       new Bomb_eater(x, y)
       io.sockets.emit('send matrix', matrix);
   }
   else {

   }
}



