// Show text
function showText(){
    document.getElementById('button').innerHTML = "I Will Kill You";
}
// change text
 function changeText(){
    document.getElementById('cng-txt').innerHTML = "I am ghost."
}
// show date
function dateShow(){
    document.getElementById('sd').innerHTML = Date();
}
// img change
function bulbOn(){
    document.getElementById("bulb").src="images/pic_bulbon.gif";
}
function bulbOff(){
    document.getElementById("bulb").src="images/pic_bulboff.gif";
}

// variables
console.log('hello world');

var bananaPrice = 12;
console.log(typeof bananaPrice);

var number1 = 25;
var number2 = 30.5;
console.log(number1 + number2);

var number1 = 25;
var number2 = '30.5';
console.log(number1 + number2);

var number1 = 25;
var number2 = '30.5';
number2 = parseFloat(number2);
console.log(number1 + number2);

var number1 = 25;
var number2 = '30.5';
number2 = +number2
console.log(typeof number2);

var number1 = 25;
var number2 = 30.5;
number2 = ''+number2
console.log(typeof number2);

var number1 = 25;
var number2 = '30.5';
number2 = parseInt(number2);
console.log(number1 + number2);

var number1 = 0.1;
var number2 = 0.2;
var total = number1 + number2;
console.log(total);

var number1 = 0.1;
var number2 = 0.2;
var total = number1 + number2;
total = total.toFixed(1);
console.log(total);

var price1 = 437;
var price2 = 547;
var total = price1 + price2;
console.log(total)

var price1 = 437;
var price2 = 547;
var total = price2 - price1;
console.log(total)

var price1 = 437;
var price2 = 547;
var total = price1 * price2;
console.log(total)

var price1 = 437;
var price2 = 547;
var total = price2 / price1;
var total = Math.round(total)
console.log(total)

let person = {
    firstName : "John",
    lastName  : "Doe",
};
  
let fullName = person.firstName + " " + person.lastName;
console.log(fullName)

// conditionals
var burgerPrice = 150;
if(burgerPrice < 200){
    console.log("Give me two of them.");
}
else{
    console.log("Give me a burger and a coffee.");
}

var gotJob = false;
var savingAmount = 5000000;
if(gotJob == true && savingAmount > 200000){
    console.log("Will you marry me?");
}
else{
    console.log("Can you wait for me?");
}

var gotJob = false;
var savingAmount = 5000000;
if(gotJob == true || savingAmount > 200000){
    console.log("Will you marry me?");
}
else{
    console.log("Can you wait for me?");
}

// array
var friendAge = [15, 17, 14, 16];
console.log(friendAge)

var friendAge = [15, 17, 14, 16];
var asamaAge = friendAge[2];
console.log(asamaAge)

// while
var num=10;
while (num <= 15){
    console.log(num);
    num++;
}
// for loop
for(var i = 0; i < 10; i++){
    console.log(i);
}

// switch
num = 500
switch(num){
    case 1000:
        console.log("I am 1000");
        break;
    case 500:
        console.log("I am 500");
        break;
    case 100:
        console.log("I am 100")
        break;
    default:
        console.log("I don't know you")
}
// object
let student = { id:5088, name:"Jahid"};
let student1 = { id:5087, name:"Turjoy"};

student1.id = 5089;

let idNo = student1.id;
console.log(idNo);

// applying JS(inch to feet)
// let inch = 156;
// let feet= inch/12;
// console.log(feet);

function inchToFeet(inch){
    let feet = inch/12;
    return feet;
}
let feet1 = inchToFeet(156);
console.log(feet1);

// leap year
const year = 3998;
let remainder =  year % 4;
if(remainder == 0) {
    console.log("This is a leap year");
}
else{
    console.log("This is not a leap year");
}

// factorial( with for loop)
// let factorial = 1;
// for ( let i = 1; i <= 5; i++){
//     factorial = factorial * i
//     console.log(factorial);
// }

// factorial ( with while loop)
var i = 1;
let factorial = 1;
while ( i <= 10){
    factorial = factorial * i; 
    i++
}
console.log(i,factorial);

// fibonacci
var fibo= [0, 1];
for (var i = 2; i <= 12; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);