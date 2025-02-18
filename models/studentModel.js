const students = [
  {
    id: 1,
    name: "김민수",
    age: 20,
    major: "컴퓨터공학",
    grade: "A",
  },
  {
    id: 2,
    name: "이영희",
    age: 22,
    major: "전기전자공학",
    grade: "B+",
  },
  {
    id: 3,
    name: "박준호",
    age: 21,
    major: "기계공학",
    grade: "A-",
  },
  {
    id: 4,
    name: "최유진",
    age: 23,
    major: "경제학",
    grade: "B",
  },
  {
    id: 5,
    name: "정수진",
    age: 24,
    major: "컴퓨터공학",
    grade: "A+",
  },
];

// 모든 정보
const getAllstudent = () => {
  return students;
};

// 특정 id 조회
const getsById = (id) => {
  return students.find((stu) => stu.id === parseInt(id));
};

// 23살 이상인 학생
const getold = () => {
  let stuc = students.filter((stu) => stu.age >= 23);
  return stuc;
};

// A이상인 학생
const getA = () => {
  let grade = students.filter((stu) => stu.grade.includes("A"));
  return grade;
};

// 컴퓨터 공학과 학생
const getComputer = () => {
  let com = students.filter((stu) => stu.major === "컴퓨터공학");
  return com;
};

module.exports = { getAllstudent, getsById, getold, getA, getComputer };
