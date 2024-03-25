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
    // console.log(`${menu.title} - ${menu.rating}`);
}
// console.log('*****');

/*forEach is an older version of for of*/
movies.forEach(
    (films) => {          //function(films){}
        // console.log(`${films.title} - ${films.rating}`);
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
})  //return must be used when we open a scope i.e. use curly braces

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

const totalCollection = movies.reduce((acc,item)=>acc+parseInt(item.collection),0);
console.log(totalCollection);


//destructing arrays,objects,parameters
const arrAvg = movies
    .filter(({ rating }) => { return (rating < 4) })
    .map(({ title, collection }) => `${title} - ${collection}`);