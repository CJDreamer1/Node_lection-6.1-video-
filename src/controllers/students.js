import * as StudentService from "../services/students.js";
import createHttpError from "http-errors";

async function getStudents(req, res) {
  const students = await StudentService.getStudents(); //метод .find потрібен, щоб викликати всі елементи колекції

  res.send({ status: 200, students });
}
async function getStudentById(req, res, next) {
  const { studentId } = req.params;

  const student = await StudentService.getStudentById(studentId);

  if (student === null) {
    return next(createHttpError(404, "Student not found"));
  }

  res.send({ status: 200, data: student });
}

async function createStudent(req, res, next) {
  const student = {
    name: req.body.name,
    gender: req.body.gender,
    email: req.body.email,
    year: req.body.year,
  };
  const createdStudent = await StudentService.createStudent(student);
  res
    .status(201)
    .send({ status: 201, message: "Student created", data: createdStudent });
}

async function deleteStudent(req, res, next) {
  const { studentId } = req.params;
  const result = await StudentService.deleteStudent(studentId);
  if (result === null) {
    return next(createHttpError(404, "Student not found"));
  }
  res.status(204).end();
}

async function updateStudent(req, res, next) {
  const { studentId } = req.params;

  const student = {
    name: req.body.name,
    gender: req.body.gender,
    email: req.body.email,
    year: req.body.year,
  };

  const result = await StudentService.updateStudent(studentId, student);

  if (result === null) {
    return next(createHttpError(404, "Student not found"));
  }
  res
    .status(200)
    .send({ status: 200, message: "Student updated", data: result });
}

export {
  getStudents,
  getStudentById,
  createStudent,
  deleteStudent,
  updateStudent,
};
