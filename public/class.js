class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.index = 1;

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


    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }

    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        console.log(norVandak);
        if (norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;

        }
    }


}


//class xotaker
class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 4;
        this.directions = [];
        this.index = 2;
    }
    stanalNorKordinatner() {
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
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }
    sharjvel() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;

            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy--;
        }
    }

    utel() {
        this.stanalNorKordinatner();
        var norVandak1 = random(this.yntrelVandak(1));
        var norVandak2 = random(this.yntrelVandak(3));
        if (norVandak1) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak1[1]][norVandak1[0]] = 2;

            this.x = norVandak1[0];
            this.y = norVandak1[1];
            this.energy++;
        }
        else if (norVandak2) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak2[1]][norVandak2[0]] = 2;

            this.x = norVandak2[0];
            this.y = norVandak2[1];
            this.energy = 0;
        }
        else {
            this.sharjvel();

        }

    }

    bazmanal() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(0));
        console.log(norVandak);
        if (norVandak) {
            var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
            xotaker.push(norXotaker);
            matrix[norVandak[1]][norVandak[0]] = 2;
        }
    }

    satkel() {
        matrix[this.y][this.x] = 0;
    }

}

//buys 
class Buys {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.index = 3;

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

    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }

    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        console.log(norVandak);
        if (norVandak) {
            var norBuys = new Buys(norVandak[0], norVandak[1]);
            buys.push(norBuys);
            matrix[norVandak[1]][norVandak[0]] = 3;

        }
    }
}

//amenaker
class Amenaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 2;
        this.directions = [];
        this.index = 4;
    }
    stanalNorKordinatner() {
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
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }
    sharjvel() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 4;

            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy--;
        }
    }

    utel() {
        this.stanalNorKordinatner();
        var norVandak1 = random(this.yntrelVandak(1));//xot
        var norVandak2 = random(this.yntrelVandak(2));//xotaker
        var norVandak3 = random(this.yntrelVandak(3));//buys
        if (norVandak1) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak1[1]][norVandak1[0]] = 4;

            this.x = norVandak1[0];
            this.y = norVandak1[1];
            this.energy++;
        }
        else if (norVandak2) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak2[1]][norVandak2[0]] = 4;

            this.x = norVandak2[0];
            this.y = norVandak2[1];
            this.energy += 2;
        }
        else if (norVandak3) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak3[1]][norVandak3[0]] = 4;

            this.x = norVandak3[0];
            this.y = norVandak3[1];
            this.energy *= 2;
        }
        else {
            this.sharjvel();

        }

    }

    bazmanal() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(0));
        console.log(norVandak);
        if (norVandak) {
            var norAmenaker = new Amenaker(norVandak[0], norVandak[1]);
            amenaker.push(norAmenaker);
            matrix[norVandak[1]][norVandak[0]] = 4;
        }
    }

    satkel() {
        matrix[this.y][this.x] = 0;
    }

}

