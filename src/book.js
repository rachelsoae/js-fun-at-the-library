function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  return character = {
    name: name,
    age: age,
    pronouns: pronouns
  }
}

function saveReview(newReview, reviews) {
  if (!reviews.includes(newReview)) {
    return reviews.push(newReview);
  }
}

function calculatePageCount(title) {
  titleLetters = title.split('');
  pageCount = titleLetters.length * 20;
  return pageCount;
}

function writeBook(title, character, genre) {
  return book = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre
  }
}

function editBook(book) {
  return book.pageCount *= 0.75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}