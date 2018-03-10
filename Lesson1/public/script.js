// 0 datark vandak (#acacac)
// 1 xot (#009900) kanach
// 2 xotaker (#b32d00)  karmir
// 3 buys(#b38600)  dexin
// 4 amenaker(#001f4d)  kapuyt
var n;
n = prompt('input n');
n = parseInt(n);

var matrix = [];
for (var y = 0; y < n; y++) {
    matrix[y] = [];
    for (var x = 0; x < n; x++) {
        matrix[y][x] = Math.round(Math.floor(0, 1));
    }
}

var side = 12;
var grassArr = [];
var xotaker = [];
var buys = [];
var amenaker = [];

function setup() {
    frameRate(5);
    createCanvas(matrix.length * side, matrix.length * side);
    background('#acacac');

    matrix=CreateRanomMatrix(matrix,n);
    console.log(matrix);

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);

            }
            else if (matrix[y][x] == 2) {

                var xot = new Xotaker(x, y);
                xotaker.push(xot);

            }
            else if (matrix[y][x] == 3) {
                var vatXot = new Buys(x, y);
                buys.push(vatXot);

            }
            else if (matrix[y][x] == 4) {
                var p = new Amenaker(x, y);
                amenaker.push(p);

            }

        }

    }

}



function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("#009900");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("#b32d00");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("#b38600");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("#001f4d");
                rect(x * side, y * side, side, side);
            }
        }
    }

    for (var i in grassArr) {
        grassArr[i].bazmanal();

    }
    for (var j in buys) {
        buys[j].bazmanal();
    }

    //xotaker
    for (var k in xotaker) {
        xotaker[k].utel();
        for (var i in grassArr) {
            if (grassArr[i].x == xotaker[k].x && grassArr[i].y == xotaker[k].y) {
                grassArr.splice(i, 1);
                break;
            }
        }
        for (var j in buys) {
            if (buys[j].x == xotaker[k].x && buys[j].y == xotaker[k].y) {
                buys.splice(j, 1);
                break;
            }
        }
    }

    for (var i in xotaker) {
        if (xotaker[i].energy == 10)
            xotaker[i].bazmanal();
        else if (xotaker[i].energy <= 0) {
            xotaker[i].satkel();
            xotaker.splice(i, 1);
            break;
        }


    }

    //amenaker
    for (var k in amenaker) {
        amenaker[k].utel();
        for (var i in grassArr) {
            if (grassArr[i].x == amenaker[k].x && grassArr[i].y == amenaker[k].y) {
                grassArr.splice(i, 1);
                break;
            }
        }
        for (var j in buys) {
            if (buys[j].x == amenaker[k].x && buys[j].y == amenaker[k].y) {
                buys.splice(j, 1);
                break;
            }
        }
        for (var l in xotaker) {
            if (xotaker[l].x == amenaker[k].x && xotaker[l].y == amenaker[k].y) {
                xotaker.splice(l, 1);
                break;
            }
        }
    }

    for (var i in amenaker) {
        if (amenaker[i].energy >= 10)
            amenaker[i].bazmanal();
        else if (amenaker[i].energy <= 0) {
            amenaker[i].satkel();
            amenaker.splice(i, 1);
            break;
        }


    }

}

function CreateRanomMatrix(matrix,n)
{
    var i = 0;
    while (i < n * n / 3) {
        for (var y = 0; y < matrix.length; y++) {
            var idx1 = matrix.indexOf(matrix[Math.floor(Math.random() * matrix.length)]);
            for (var x = 0; x < matrix[y].length; x++) {
                var idx2 = matrix.indexOf(matrix[Math.floor(Math.random() * matrix.length)]);
                i++;
                break;
            }
    
            matrix[idx1][idx2] = 1;
    
        }
    }
    var i = 0;
    while (i < n / 3) {
        for (var y = 0; y < matrix.length; y++) {
            var idx1 = matrix.indexOf(matrix[Math.floor(Math.random() * matrix.length)]);
            for (var x = 0; x < matrix[y].length; x++) {
                var idx2 = matrix.indexOf(matrix[Math.floor(Math.random() * matrix.length)]);
                break;
            }
            if (matrix[idx1][idx2] == 0) {
                matrix[idx1][idx2] = 2;
                i++;
            }
    
    
        }
    }
    var i = 0;
    while (i <  n*n / 3) {
        for (var y = 0; y < matrix.length; y++) {
            var idx1 = matrix.indexOf(matrix[Math.floor(Math.random() * matrix.length)]);
            for (var x = 0; x < matrix[y].length; x++) {
                var idx2 = matrix.indexOf(matrix[Math.floor(Math.random() * matrix.length)]);
                break;
            }
            if (matrix[idx1][idx2] == 0) {
                matrix[idx1][idx2] = 3;
                i++;
            }
    
        }
    }
    var i = 0;
    while (i <  n / 3) {
        for (var y = 0; y < matrix.length; y++) {
            var idx1 = matrix.indexOf(matrix[Math.floor(Math.random() * matrix.length)]);
            for (var x = 0; x < matrix[y].length; x++) {
                var idx2 = matrix.indexOf(matrix[Math.floor(Math.random() * matrix.length)]);
                i++;
                break;
            }
            if (matrix[idx1][idx2] == 0) {
                matrix[idx1][idx2] = 4;
                i++;
            }
        }
    }
    return matrix;
}                                          
//hin
// var matrix = [];
// for (var y = 0; y < n; y++) {
//     matrix[y] = [];
//     for (var x = 0; x < n; x++) {
//         matrix[y][x] = Math.round(Math.random(0, 1) * 4);
//     }
// }
// console.log(matrix);