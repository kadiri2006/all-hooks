let studentsInitialState = {
  noOfStudents: 100,
};

function getStudent() {
  return { type: "GET_STUDENT" };
}

module.exports = { studentsInitialState, getStudent };
