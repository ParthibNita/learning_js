// first JavaScript
console.log('Hello');


// variables: use 'let'(good practice) OR 'var'
let name = 'PARTHIB';
let age = 20;
//var has gobal scope which sometimes create a problem

//constants: remain constant throughout the program
const country = 'INDIA';



// ⚪Primative/Value Types
let words = 'ONE';      // ->string
let num = 1;           // ->number
let check = true;     // ->boolean
let und = undefined; // ->undefined
let und1;           // ->also undefined
let job = null;    // ->null


// ⚪Reference Types
let object = {      // ->OBJECTS
    naam: 'SOFA',
    body: 'WOOD'
};
console.log(object);

object.naam = 'CHAIR'; //dot notation
object['body'] = 'plastic'; //bracket notation
console.log(object);
console.log(object.body);
console.log(object['naam']);

let selectarray = ['red', 'PARTHIB', 5, true];  // ->ARRAYS
console.log(selectarray);
console.log(selectarray.length);
selectarray[5] = 'blue';
console.log(selectarray);
selectarray[4] = 25;
console.log(selectarray);

function namaste(name) {                // ->FUNCTIONS
    console.log('Namaste🙏 ' + name);
}
namaste('INDIA');

function multiply(num1, num2) {
    return num1 * num2;
}
console.log('The result of 5 X 6 is : ' + multiply(5, 6));



//String Templates:
let qty = 5;
let price = 10;
let productName = 'SOAP';
let shopName = 'Grocery Wala';

console.log('I have brought ' + qty + ' ' + productName + 's' + ' for ₹' + qty * price + ' only');
console.log(`I have brought ${qty} ${productName.toLowerCase()}s for ₹${(qty * price).toFixed(2)} only`); //easy to write



//Math objects and methods:
console.log(Math.round(15.8));
console.log(Math.round(15.2));
console.log(Math.floor(15.99)); //gives 15
console.log(Math.ceil(16.02)); //gives 17
console.log(Math.PI);

/*random no: 0<= random < 1*/
console.log(Math.random());
/*custom ranges */
console.log(Math.floor(Math.random() * 5 + 1))  //random from 1-5
console.log(Math.floor(Math.random() * 6 + 20)) //random from 20-25
console.log(Math.floor(Math.random() * 3 + 10)) //random from 10-12



//DECISIONS: comparison operators
/*double equals: doesnt care about types*/
console.log(1 == '1');  //true
console.log(0 == '');   //true
/*triple equals: care about types*/
console.log(1 === '1'); //false

/* not-equals*/
console.log(1 != '1');  //false
console.log(1 !== '1');  //true


//console
console.warn("Dont touch this line you bc");
console.error("Please check the syntax you pussy");
// let userInput = prompt('enter a number');
// alert(`${userInput} is your lucky number`);
// console.log(parseInt(userInput) + 1);
console.log(parseInt('1015pppap5225ppoa105'));



//LOOPS
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

//Map
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
