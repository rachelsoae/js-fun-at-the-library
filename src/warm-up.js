// Read the instructions for each of the warm up exercises carefully. This may
// seem repetitious or pedantic at first, however it's very important that you
// become comfortable with these fundamental concepts. Do not move on to
// iteration 1 until you are confident that you've completed all of iteration 0.


//------------------------- Variables -------------------------//


// Initialize two new variables, "title", and "pages", and assign values to them with
// a book's title and page count.

// var title = "Harry Potter";
// var ...

var title = "Paradise Lost";
var pages = 1000;
// console.log('title, pages:', title, pages);


// Reassign (not initialize) your "pages" variable from above. An editor came around and
// condensed the book, use a built in math operator to make the page count a quarter
// of what it currently is 

pages /= 4;
console.log('pages condensed:', pages);

// Initialize a new variable "movie", but leave it undefined

var movie;
// console.log('empty movie:', movie);

// Create a variable named "sequel", and assign it to a be a sequel of your
// book (made up or not!). Your sequel must make use of your "title" variable from above

var sequel = `${title} 2: Paradise Gained`;
// console.log('sequel:', sequel);

// Initialize a new variable "isFavorite", and assign it to a boolean value indicating
// if the book you chose is your favorite book or not

var isFavorite = false;
// console.log('is favorite:', isFavorite);


// Create a new variable named "isShortStory", and use a comparison operator to
// assign a boolean value to this variable. If "pages" is less than 25, the
// variable should be true, otherwise it should be false. You MUST use a
// comparison operator.

var isShortStory = pages < 25;

console.log('short story?', isShortStory);

//------------------------- Conditionals -------------------------//


// Express the following in code: If the variable "pages" is less than 1000 log
// the statement 'I could read that in a day!', otherwise, log the statement 
// 'Ok, maybe I could read that in a day and a half'

if (pages < 1000) {
    console.log('I could read that in a day!');
} else {
    console.log('Ok, maybe I could read that in a day and a half');
}

// Express the following in code: If the variable "isFavorite" is true,
// log the statement 'My favorite book is [title]!'. Otherwise, log the
// statement 'I recently read the [title] book'. In either case, the value stored in
// the "title" variable should be included in the logged statement.

if (isFavorite) {
    console.log(`My favorite book is ${title}!`);
} else {
    console.log(`I recently read the ${title} book`);
}

//------------------------- Arrays -------------------------//


// Create a new variable "books" and assign it to an Array of 5 different
// book titles, represented by their names as Strings.

var books = [
    'The Joy Luck Club', 
    'Crying in H Mart', 
    'Snowflower and the Secret Fan', 
    'Peony in Love', 
    'The Makioka Sisters'
];

// console.log(books);

// Write the code to access the 3rd element of the Array, using bracket
// notation.

books[2];
// console.log(books[2]);

// Create a new variable "belowTwoHundred" and assign it to an Array of 12
// different numbers below two hundred.

var belowTwoHundred = [3, 98, 159, 39, 71, 193, 0, 83, 67, 166, 23, 91];

// Write the code to access the 5th element of the array, using bracket notation.
belowTwoHundred[4];
// console.log(belowTwoHundred[4]);

//------------------------- Objects -------------------------//

// Create a new variable "dictionary" and assign to it an object literal with two
// keys: name, and hasThesaurus. The value for name should the string 'Webster's', and
// the value for hasThesaurus should be false

var dictionary = {
    name: 'Webster\'s',
    hasThesaurus: false
}
// console.log(dictionary)

// Write the code to add the key of pageCount, with the value of 720. Use dot
// notation to do this. DO NOT modify your code from above.

dictionary.pageCount = 720;
// console.log(dictionary);