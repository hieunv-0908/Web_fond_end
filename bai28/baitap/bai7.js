function list_average_score(students, average_score_greater_than_eigth) {
  let average = 0;

  for (let i = 0; i < students.length; i++) {
    let sum = 0;
    sum +=
      students[i].scores.math +
      students[i].scores.english +
      students[i].scores.literature;
    average = sum / Object.keys(students[i].scores).length;
    if (average >= 8) {
      average_score_greater_than_eigth.push(average);
    }
  }
  console.log(
    "Danh sách các sinh viên có điểm trung bình  lớn hơn hoặc bằng 8:",
    average_score_greater_than_eigth
  );
}

let average_score_greater_than_eigth = [];
let students = [
  {
    name: "Trần Trí Dương",
    scores: {
      math: 9,
      english: 8,
      literature: 7,
    },
  },

  {
    name: "Hà Bích Ngọc",
    scores: {
      math: 3,
      english: 2,
      literature: 5,
    },
  },

  {
    name: "Bùi Thái Sơn",
    scores: {
      math: 9.5,
      english: 9,
      literature: 9,
    },
  },
];
list_average_score(students, average_score_greater_than_eigth);
