//1. Toán tử 3 ngôi
const x = 100
const result = (x < 1000) ? "nhỏ hơn 1000" : "lớn hơn hoặc bằng 1000";
console.log(result)

//2. Shorthand Evaluated
let variable2;
if(variable1 !== null || variable1 !== undefined || variable1 !== ''){
    variable2 = variable1
}else{
    variable2 = ""
}

const variable22 = variable1 || "";

//3. Variable declaration – If Comparison
// let a,b;
// let c = 3;
let a,b,c = 3;

// if(isTurnOn === true)
if(isTurnOn){}

//4. For loop – For loop with decimal base
for (let i = 0; i < array.length; i++) {
    const element = array[i];
}

for(let i in sampleArr){

}

for (let i = 0; i < 100000; i++) {}
for (let i = 0; i < 1e5; i++) {} 
// giá trị các biểu thức sau đề là true
// 1e0 === 1;
// 1e1 === 10;
// 1e2 === 100;
// 1e3 === 1000;
// 1e4 === 10000;
// 1e5 === 100000;


//5. Object property:
const d = 1, e = 2;
const obj = { x:x, y:y };

const f = 1, g = 2;
const oj = { f, g };


//6. Rút gọn định nghĩa function(Sử dụng arrow function):
function sayHello(name){
    console.log('Hello', name);
}

setTimeout(function(){
    console.log('Loaded')
},2000);

list.forEach(function(item){
    console.log(item);
})

sayHello = name => console.log('Hello', name);
setTimeout(() => console.log('Loaded'),2000);
list.forEach(item => console.log(item));

//7. Set default value for parameter in function:
function getValue(a,b,c) {
    if(a === undefined)
        a = 3;
    if(b === undefined)
        b = 4;
    return a * b + c
}

getValue = (a, b = 3, c= 4) => (a * b + c)

//8. Template list
const welcome = 'You have logged in as '+first+' '+last+'.';
const welcomee = `You have logged in as ${first} ${last}`

const lorem = 'lorem ...\n\t'
+"asdasd..."

const loremm = `a.
ab..
c..
cf..
`
//9. Destructuring Assignment	
const action = require('lib/action')
const service = require('lib/service')

const form = this.props.form;
const errors = this.props.errors;
const entity = this.props.entity;
const controller = this.props.controller;
const component = this.props.component;

import { action, service} from 'lib';
const { formm, errorss, entityy, controllerr, componentt } = this.props;


//10. Spead Operator
//joining arrays
const odd = [1, 3, 5];
const nums = [2, 4, 6].concat(odd)

const oddd = [1, 3, 5];
const numss = [2, 4, 6, ...odd]

//cloning arrays
const arr = [1, 2, 3, 4];
const arr2 = arr.slice()

const arrr = [1, 2, 3, 4];
const arrr2 = [...arr];

//11. Constraint Param
function sample(param1) {
    if(param1 === undefined) {
        throw new Error('Thiếu tham số!');
    }
    return param1;
}

madatory = () => { throw Error('Thiếu tham số!'); }
sample = (param1 = madatory()) => param1

//12. Find() in arrays
const employees = [
    { name: 'Emp A', age: 25 },
    { name: 'Emp B', age: 28 },
    { name: 'Emp C', age: 35 }
]

function findEmp(name){
    for(let i = 0; i < employees.length; i++){
        if(employees[i].name === name){
            return employees[i];
        }
    }
}

const name = 'Emp A'
emp = findEmp(name)


const namee = 'Emp A'
emp = employees.find(item => item.name === name)

//13. Object[key]
function validate(fullName) {
    if(!fullName.firstName)
        return false;
    if(!fullName.lastName)
        return false;
    return true;
}

console.log(validate({firstName:'Duy',lastName:'Buffet'}));

const rule = {
    firstName: {
        required:true
    },
    lastName: {
        required:true
    }
}

const validate = (rule, values) => {
    for(prop in rule){
        if(rule[prop].required){
            if(!values[prop]) {
                return false;
            }
        }
    }
    return true;
}

console.log(validate(rule, {firstName:'Duy'}));
console.log(validate(rule, {firstName:'Duy', lastName:'Buffet'}));

//14. Bitwise NOT double
Math.floor(6.9) === 6
~~6.9 === 6