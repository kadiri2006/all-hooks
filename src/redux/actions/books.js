let booksInitialState = {
  noOfBooks: 100,
};

function getBook(name) {
  return { type: "GET_BOOK", name };
}

module.exports = { booksInitialState, getBook };
