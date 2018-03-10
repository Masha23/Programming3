class Xotaker extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.tariq = 0;
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
        return super.yntrelVandak(ch);
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
