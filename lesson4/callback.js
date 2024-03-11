// tim so chan trong mang, co su dung callback
const arr = [];

function Nhap(calback){
    while (true) {
        let input = prompt("Nhập một số nào hông thích nữa thì bấm OK:");
        if (input === null || input === "") {
            break; 
        }
        let number = Number(input);
        arr.push(number);
    }
    if(typeof calback === 'function')
        console.log("Mảng các số chẵn tìm được: ",calback(arr));
}
function timSoChan(arr){
    var result = [];
    arr.forEach(i => {
        if(i % 2 === 0){
            result.push(i);
        }
    });
    return result;
}

Nhap(timSoChan);

