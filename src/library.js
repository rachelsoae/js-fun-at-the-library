function createLibrary(name) {
  var fantasy = [];
  var fiction = [];
  var nonFiction = [];
  return { 
    name: name,
    shelves: {fantasy, fiction, nonFiction} 
  }
}

function addBook(library, book) {
  library.shelves[book.genre].push(book);
}

function checkoutBook(library, bookTitle, genre) {
  var shelf = library.shelves[genre];

  for (var i = 0; i < shelf.length; i++) {
    if (bookTitle ===  shelf[i].title) {
      shelf.splice(i, 1);
      return `You have now checked out ${bookTitle} from the ${library.name}.`
    }
  } 

  return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}.`
}

// function takeStock(library, genre) {
//     if (genre === undefined) {
//       var numFantasy = library.shelves['fantasy'].length;
//       var numFiction = library.shelves['fiction'].length;
//       var numNonFiction = library.shelves['nonFiction'].length;

//       var totalBooks = numFantasy + numFiction + numNonFiction;
//       return `There are a total of ${totalBooks} books at the ${library.name}.`
//     } else {
//       var numBooksOnShelf = library.shelves[genre].length

//       return `There are a total of ${numBooksOnShelf} ${genre} books at the ${library.name}.`
//     }
// }

function takeStock(library, genre) {
  if (genre === undefined) {
  var numFantasy = library.shelves['fantasy'].length;
  var numFiction = library.shelves['fiction'].length;
  var numNonFiction = library.shelves['nonFiction'].length;

  var totalBooks = numFantasy + numFiction + numNonFiction;
  return `There are a total of ${totalBooks} books at the ${library.name}.`;
  } else {
    var shelf = library.shelves[genre];

    for (var i = 0; i < shelf.length; i++) {
      if (genre === shelf[i].genre) {
        var numBooksOnShelf = shelf.length;
    
        return `There are a total of ${numBooksOnShelf} ${genre} books at the ${library.name}.`;

      } else if (genre !== shelf) {
        return `This book is not on the correct shelf.`;
      }
    }
  }
}
 

//shelf = library.shelves[shelf]
//in loop, book = library.shelves[shelf][i]


module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};