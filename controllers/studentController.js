const studentModel = require("../models/studentModel");

const getAllstu = (req, res) => {
  const students = studentModel.getAllstudent();
  res.render("student/index", { students });
};
const getsbyid = (req, res) => {
  const students = studentModel.getsById(req.params.id);
  if (students) {
    res.render("student/show", { students });
  } else {
    res.statusCode = 404;
    res.send("해당하는 학생이 없습니다.");
  }
};
const getAstudent = (req, res) => {
  const students = studentModel.getA();
  res.render("student/grade", { students });
};
const getOlder = (req, res) => {
  const students = studentModel.getold();
  res.render("student/old", { students });
};
const getcom = (req, res) => {
  const students = studentModel.getComputer();
  res.render("student/computer", { students });
};

module.exports = {
  getAllstu,
  getsbyid,
  getAstudent,
  getOlder,
  getcom,
};
