function bookReducer(state = booksInitialState, action) {
  switch (action.type) {
    case "GET_BOOK":
      return {
        ...state,
        noOfBooks: state.noOfBooks - 1,
        bookName: action.name,
      };
      break;

    default:
      return state;
      break;
  }
}

module.exports = { bookReducer };
