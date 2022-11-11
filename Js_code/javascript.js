function show(){
    document.getElementById('demo').innerHTML = "Hello Javascript!";
}

function Allumer(){
    document.getElementById('image').src='ampa.jfif';
}

function Eteindre(){
    document.getElementById('image').src='ampe.jfif';
}

function test(){
    // window.print("Hello World!");
    // var x =2; var y = 2;
    // window.alert(x<<y)
    // let x = -100;
    // x <<= 5;

}
let length = 16;                               // Number
let lastName = "Johnson";                      // String
let x = {firstName:"John", lastName:"Doe"};    // Object
function show_date(){
    document.getElementById('date').innerHTML = Date();
}