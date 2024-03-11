class square {
    constructor(width) {
        this.width = width;
    }

    getArea() {
        console.log(`Square of this ${this.width * this.width}`);
        return this.width * this.width;
    }
}

class cube extends square {
    constructor(width){
        super(width);
    }
    squareArea = this.getArea();
    getVolume() {
        console.log(`Volume of this ${this.squareArea * this.width}`)
        return this.squareArea * this.width;
    }
}
var myCube = new cube(5);
myCube.getVolume();
