let studentList = [
  {
    id: 1,
    fullName: "Nguyen Van A",
    age: 18,
    numberClass: 12,
  },
  {
    id: 2,
    fullName: "Nguyen Van B",
    age: 19,
    numberClass: 12,
  },
  {
    id: 3,
    fullName: "Nguyen Van C",
    age: 18,
    numberClass: 12,
  },
];

const getList = () => {
  if (studentList) {
    return studentList;
  } else {
    return false;
  }
};
const getDetail = (id) => {
  const index = studentList.findIndex((student) => {
    return student.id == id;
  });

  if (index !== -1) {
    let student = studentList[index];
    return student;
  } else {
    return false;
  }
};
const createStudent = (student) => {
  const newStudent = {
    id: Math.random(),
    ...student,
  };
  studentList = [...studentList, newStudent];
  return newStudent;
};
const updateStudent = ( id, fullName, age, numberClass ) => {

  const index = studentList.findIndex((student) => student.id === parseInt(id));
  const studentOld = studentList[index];
  const updateStudent = { ...studentOld, fullName, age, numberClass };

  studentList[index] = updateStudent;
  return updateStudent;
};
const deleteStudentServices = (id) =>{
    const index = studentList.findIndex((student) => student.id === parseInt(id));
    if (index !== -1) {
      const student = studentList[index];
      studentList.splice(index, 1);
      return student;
    } else {
      false;
    }
}
module.exports = {
  getList,
  getDetail,
  createStudent,
  updateStudent,
  deleteStudentServices,
};
