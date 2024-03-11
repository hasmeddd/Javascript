/*
    - Apply, call, bind đều đc sử dụng để thay đổi this của đối tượng trong hàm
    - Tham số đầu tiên của Apply, call, bind là một object đc chỉ định bởi this 
    - Riêng apply và call thì cách sử dụng giống nhau nhưng tham số thứ 2:
        Của call: là 1 danh sách các chỉ mục 
        Của apply là 1 mảng
    - Bind được gán cho chức năng liên kết mới và thực thi sau 
    - Bind là 1 hàm trả về tương ứng và gọi sau, còn 2 cái kia thì gọi dc ngay
 */


// var year = 2023;
// function getDate(month, day) {
//     return `${this.year} - ${month} - ${day}`;
// }
// const obj = { year: 2024 };

// console.log(getDate.call(null,3,8));
// console.log(getDate.call(obj,3,8));
// console.log(getDate.apply(obj,[3,8]));
// console.log(getDate.bind(obj)(3,8));

// B.apply( A, arguments ) arguments = [1,2,3]
// B.call( A, arguments ) arguments = 1,2,3

const girl = {
    amount: 10,
    unit: 'USD'
}

function goShoping( item, quantity, price) {
    const totalCost = price * quantity;
    if(this.amount < totalCost){
        console.log(`Not enough money to buy the product!`);
    }else {
        console.log(`Girl went shopping and bought ${quantity} ${item} for ${totalCost} ${this.unit}`);
    }
}
goShoping.call(girl,'shoes',2,100);

//lam quen aboy
const boy = {
    amount:100000,
    unit:'USD'
}
// goShoping.call(boy,'shoes',2,100); // truyền chỉ mục
// goShoping.apply(boy,['shoes',2,100]); // truyền mảng


/* 
Bind: tạo ra 1 function khác và function này thực hiện nhiệm vụ sau 
*/
console.log(`bat dau xin tien`);
const boundShopping = goShoping.bind(boy);
console.log(`Sau do di mua cai khac`);
boundShopping('Iphone 15',3,2000);

// goShoping.bind(boy)('Iphone 15',3,2000); // cách viết khác

function log(msg){
    console.log(msg);
}
// log(1);
// log(1,2);

function logApply() {
    console.log.apply(console, arguments);
}
logApply(1);
logApply(1,2,3);




