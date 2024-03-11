// Bài tập: chuyển slide trang 37 và 50 thành class

class Constructor {
    constructor(val){
        this.pro2 = "Bubble";
        var pro3 = val; // private
        this.pro4 = function(){
            console.log(`${this.pro2} - ${this.pro3}`)
        }
        this.pro5 = () => {
            return pro3;
        }
    }
}

// var obj = new Constructor('Bub');
// console.log(obj.pro3);// undefined => console.log(obj.pro5());
// obj.pro4();

// trang 50
// function Car() {
//     Car.prototype = {
//         constructor:Car,
//         speed:0,
//         printSpeed: function(){
//             console.log(this.speed + '<br/>');
//         }
//     }
// }

// var car = new Car();
// car.instanceMethod = function(){
//     console.log('An instance method <br/>');
// };
// car.speed = 50;
// car.printSpeed();
// car.instanceMethod(); 

// car.speed = 50;
// car.printSpeed();
// car.instanceMethod();

// function Cabriolet(){}

// Cabriolet.prototype = new Car();
// Cabriolet.prototype.topState = 'closed';
// Cabriolet.prototype.openTop = function(){
//     this.topState = 'opened';
//     console.log('Top '+ this.topState);
// }
// Cabriolet.prototype.closeTop = function(){
//     this.topState = 'closed';
//     console.log('Top '+ this.topState);
// }

// var cabriolet = new Cabriolet();
// cabriolet.speed = 120;
// cabriolet.printSpeed();
// cabriolet.openTop();
// cabriolet.closeTop();

// function TeslaCabriolet(){}
// TeslaCabriolet.prototype = new Cabriolet();
// TeslaCabriolet.prototype.name = 'Tesle http....';
// TeslaCabriolet.prototype.sayName = function(){
//     console.log(this.name);
// }

// var tesla =  new TeslaCabriolet();
// tesla.openTop();
// tesla.sayName();


class Car {
    constructor() {
        this.speed = 0;
    }

    printSpeed() {
        console.log(this.speed);
    }
}

var car = new Car();
car.instanceMethod = function() {
    console.log('An instance method');
};
car.speed = 50;
car.printSpeed();
car.instanceMethod();

class Cabriolet extends Car {
    constructor() {
        super();
        this.topState = 'closed';
    }

    openTop() {
        this.topState = 'opened';
        console.log('Top ' + this.topState);
    }

    closeTop() {
        this.topState = 'closed';
        console.log('Top ' + this.topState);
    }
}

const cabriolet = new Cabriolet();
cabriolet.speed = 120;
cabriolet.printSpeed();
cabriolet.openTop();
cabriolet.closeTop();

class TeslaCabriolet extends Cabriolet {
    constructor() {
        super();
        this.name = 'Tesla http....';
    }

    sayName() {
        console.log(this.name);
    }
}

const tesla = new TeslaCabriolet();
tesla.openTop();
tesla.sayName();
