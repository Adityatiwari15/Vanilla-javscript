
const btnClick = document.querySelector('#btn-click');

const inputTxt = document.querySelector('#input-txt');

let a = 1;

console.log(inputTxt);

btnClick.addEventListener('click', function(){
    console.log(a++);
});

