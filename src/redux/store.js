const { combineReducers, createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");
const { default: thunk } = require("redux-thunk");
const { fetchReducer } = require("./async");
const bookReducer = require("./reducers/book");
const studentReducer = require("./reducers/students");

const rootStore = combineReducers({
  bookReducer,
  studentReducer,
  fetchReducer,
});

let store = createStore(rootStore, applyMiddleware(logger, thunk));

module.exports = { store };
