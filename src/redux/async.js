const { default: axios } = require("axios");

//state
let statusOfData = {
  loading: false,
  data: [],
  error: "",
};

//actions

function getData(data) {
  return { type: "GET_DATA", payload: data };
}

function startData() {
  return { type: "START_DATA" };
}

function errorData(data) {
  return { type: "ERROR_DATA", payload: data };
}

//reducer

function fetchReducer(state = statusOfData, action) {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, loading: false, data: action.payload };
      break;

    case "START_DATA":
      return { ...state, loading: true };
      break;

    case "ERROR_DATA":
      return { ...state, loading: false, error: action.payload };
      break;

    default:
      return state;
      break;
  }
}

//fetch function call

function fetchData(url) {
  return async (dispatch) => {
    dispatch(startData());
    try {
      const response = await axios.get(url);
      dispatch(getData(response.data));
    } catch (error) {
      dispatch(errorData(error.toString()));
    }
  };
}

module.exports = { fetchData, fetchReducer };
