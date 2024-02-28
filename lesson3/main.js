const isOdd = (num) =>  { return num % 2 == 1 }

console.log(isOdd(3))

var sachs = [
    {
        tacgia:'Harper Lee',
        tieude:'To Kill a Mockingbird',
        namxuatban:2020,
        trangthai:true,
    },
    {
        tacgia:'Ray Bradbury',
        tieude:'Fahrenheit 451',
        namxuatban:2022,
        trangthai:false,
    }
]
for (const key in sachs) {
    console.log(sachs[key]);
}

// bai 1
// const arr = [];
// while (true) {
//     let input = prompt("Nhập");
//     if (input === null || input === "") {
//         break; 
//     }
//     let number = Number(input);
//     arr.push(number)
// }

// const timMinMax = (arr) => {
//     let max_arr = Math.max(...arr)
//     let min_arr = Math.min(...arr)
//     return `${max_arr},${min_arr}`
// }

// let result = timMinMax(arr)
// console.log(result)


// bai 2
const cau = function() {
    let inp = prompt("Nhap mot cau di").split(" ");
    let dainhat = "";

    for (const i in inp) {
        if (dainhat.length < inp[i].length) {
            dainhat = inp[i];
        }
    }
    
    return dainhat;
}

// let result = cau();
// console.log(result);


function plusall() {
    var res = 0;
    for(var i in arguments){
        res += arguments[i];
    }
    return res;
}

document.write(plusall(1) + "<br/>");
document.write(plusall(2,3,5) + "<br/>");

function func1(a,b,c) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

func1(1,2,3);

this.name = 'Thanh'
var sayHello = function(){ alert('Helo ' + this.name);};
var sayGoodbye = function(){ alert('GoodBye ' + this.name);};

sayGoodbye.call();
sayGoodbye.apply();
sayHello.call();
sayHello.apply();