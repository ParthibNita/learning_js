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



//****
//Array Methods:
const movies = [
    {
        title: 'Animal',
        rating: 4.0,
        collection: '800Cr'
    },
    {
        title: 'Barfi',
        rating: 4.2,
        collection: '200Cr'
    },
    {
        title: 'Rockstar',
        rating: 4.8,
        collection: '300Cr'
    },
    {
        title: 'Jawan',
        rating: 3.8,
        collection: '1100Cr'
    },
    {
        title: 'Pathaan',
        rating: 3.2,
        collection: '950Cr'
    },
    {
        title: 'Oppenheimer',
        rating: 5.0,
        collection: '5200Cr'
    },
    {
        title: '12th Fail',
        rating: 4.9,
        collection: '150Cr'
    },
    {
        title: 'Farzi',
        rating: 4.8,
        collection: '600Cr'
    },
    {
        title: 'Tiger-3',
        rating: 3.5,
        collection: '575Cr'
    },
    {
        title: 'KGF-2',
        rating: 4.7,
        collection: '1145Cr'
    },
]

for (let menu of movies) {
    console.log(`${menu.title} - ${menu.rating}`);
}
console.log('*****');

/*forEach is an older version of for of*/
movies.forEach(
    (films) => {          //function(films){}
        console.log(`${films.title} - ${films.rating}`);
    }
)

//Maps
const arrTitle = movies.map(films => {
    return films.title.toUpperCase();
});

const arrRating = movies.map((films) => {
    return films.rating;
})

const arrCollection = movies.map(films => films.collection);


//filter: filters the elements of the array that fulfills it condition
const arrF = movies.filter(films => {
    return films.rating > 4.2;
})

/*using map with filter: */
const arrGood = movies
    .filter(films => (films.rating > 4 && parseInt(films.collection) >= 300))
    .map(films => { return `${films.title} - ${films.rating}` });

// Reduce Method:
const bestCollection = arrCollection.reduce((max, currValue) => {
    if (parseInt(max) > parseInt(currValue)) return max;

    else return currValue;
})

const bestRating = arrRating.reduce((max, currValue) => {
    if (max > currValue) return max;

    else return currValue;
})


//destructing arrays,objects,parameters
const arrAvg = movies
    .filter(({ rating }) => { return (rating < 4) })
    .map(({ title, collection }) => `${title} - ${collection}`);