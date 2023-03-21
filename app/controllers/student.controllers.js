const {
  getList,
  getDetail,
  createStudent,
  updateStudent,
  deleteStudentServices,
} = require("../services/student.services.js");

const getStudentList = (req, res) => {
  let studentList = getList();
  //   res.setHeader("Content-Type", "application/json");
  if (studentList) {
    return res.status(200).send(studentList);
  } else {
    return res.status(404).send("Not found");
  }
};
const getOneStudentList = (req, res) => {
  //lay 1 hs
  const param = req.params;
  const id = param.id;
  // Tạo mới biến để hứng giá trị từ phương thức bên services
  const student = getDetail(id);

  if (student) {
    return res.status(200).send(student);
  } else {
    return res.status(404).send("Not found");
  }
};
const postStudent = (req, res) => {
  let student = req.body;
  const newStudent = createStudent(student);
  res.status(201).send(newStudent);
};
const putStudent = (req, res) => {
  if (updateStudent) {
    const { id } = req.params;
    const { fullName, age, numberClass } = req.body;
    const update = updateStudent( id, fullName, age, numberClass)
    
    res.status(200).send(update);

  } else {
    res.status(404).send("not found");
  }
};
const deleteStudent = (req, res) => {
//   res.setHeader("Content-Type", "application/json");
  const { id } = req.params;
  const studentDelete = deleteStudentServices(id);
  
  if (studentDelete) {
    res.status(200).send(studentDelete);
  } else {
    res.status(404).send("not found");
  }
  
};

module.exports = {
  getStudentList,
  getOneStudentList,
  postStudent,
  putStudent,
  deleteStudent,
};
