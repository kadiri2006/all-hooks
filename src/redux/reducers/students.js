function studentReducer(state = studentsInitialState, action) {
  switch (action.type) {
    case "GET_STUDENT":
      return { ...state, noOfStudents: state.noOfStudents - 1 };
      break;

    default:
      return state;
      break;
  }
}

module.exports = { studentReducer };
