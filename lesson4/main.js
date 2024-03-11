// // scope
// var avar = "Something global";
// afunc();
// function afunc() {
//     document.write(avar + "<br>");
//     var avar = "something local"; // JS nâng 'var avar;' lên đầu hàm nên sẽ là undefined
//     document.write(avar + "<br>");
// }



// // this
// function global() { 
//     document.write(this + "<br>"); 
// }
// var o = { 
//     "local" : function() { 
//         document.write(this + this.x + "<br/>"); 
//     },
//     "x":10
// }

// global();
// o.local();

// var student = {
//     name : 'Thanh',
//     getName: function(){
//         console.log(this.name);
//         return this.name;
//     }
// }
// var _student = student.getName();

// // scope, call, apply
// var person1 = { name: 'Nhat', age:12 };
// var person2 = { name: 'Trung', age:22 };

// var sayHello = function(){ alert('Hello, '+this.name); };
// var sayGoodbye = function(){ alert('Goodbye, '+this.name); };

// sayHello(); 
// sayGoodbye();

// sayHello.call(person1);
// sayGoodbye.call(person2);
// sayHello.apply(person1);
// sayGoodbye.apply(person2);

// // Scope chain
// function step1() {
//     console.log('Scope chain: '+te);
// }

// function step2() {
//     te = 2;
//     step1();
// }
// step2();
// var te = "Global variables";


// Scope, bind
// var checkNumericRange = function(value) {
//     if(typeof value !== 'number')
//         return false;
//     else
//         return value >= this.minimum && value <= this.maximum;
// }

// var range = {minimum:10,maximum:20};

// var boundCheckNumericRange = checkNumericRange.bind(range);

// var result = boundCheckNumericRange(12);
// document.write(result);

// // Currying
// function add(a,b,c) {
//     return a + b +c;
// }

// console.log(add(1,2,3));
// function addCurries(a){
//     return (b) => {
//         return (c) => {
//             return a + b +c;
//         }
//     }
// }
// console.log(addCurries(1)(2)(3));
// const ad1 = addCurries(1);
// const ad2 = ad1(2);
// const ad3 = ad2(4);

// console.log(ad3);

// // Lexical Scope
// function fOuter() {
//     var x = "Hello";
//     function fInner(){
//         x = "World";
//     }
//     fInner();
//     return x;
// }

// document.write(fOuter());

// var myFunction = function() {
//     var name = 'Thanh';
//     var myOtherFunction = function() {
//         console.log('I am ' + name);
//     }
//     console.log(name);
//     myOtherFunction();
// };

// myFunction();

// // closures
// function outerF(){
//     var x = 'World';
//     function innerFsetX(val){
//         x = val;
//     }
//     return innerFsetX;
// }
// var a = outerF();
// a('Hello');

////callback
// var sayBye = function(name) {
//     var text = 'Bye '+ name;
//     return () => {
//         console.log(text);
//     }
// }
// sayBye('Me');
// var callMe = sayBye("Me");
// callMe();

