// Every student receives a grade in the inclusive range  0 from to 100.
// Any grade less than 40 is a failing grade.
// Sam is a professor at the university and likes to round each student's according to these rules:
//      If the difference between the grade and the next multiple of is less than , round up to the
//      next multiple of 5.
// If the value of is less than , no rounding occurs as the result will still be a failing grade.
// For example, will be rounded to but will not be rounded because the
// rounding would result in a number that is less than .
// Given the initial value of for each of Sam's students, write code to automate the rounding
// process. For each , round it according to the rules above and print the result on a new line.

// Input Format
// The first line contains a single integer denoting (the number of students) => n .
// Each line i of the n subsequent lines contains a single integer, grade , denoting student i's grade.
// Constraints
// n is >= 1  and <= 60    1-60
//grade is >= 0 and <= 100  0-100

// Output Format
// For each grade of "n"  grades, print the rounded grade on a new line.
// 4
// 73
// 67
// 38
// 33

let grades = [4, 73, 67, 38, 33];

function gradingStudents(grades) {
  let finalGrades = [];
  for (let i = 0; i < grades.length; i++) {
    let roundedUp = Math.ceil(grades[i] / 5) * 5;
    let original = grades[i];

    if (grades[i] < 38) {
      finalGrades.push(original);
    }

    if (original >= 38 && roundedUp - original <= 2) {
      finalGrades.push(roundedUp);
    }

    if (original >= 38 && roundedUp - original > 2) {
      finalGrades.push(original);
    }
    // console.log("original grade ->", original);
    // console.log("rounded up grade ->", roundedUp);
    // console.log("index rounded up ->", roundedUp);
  }
  console.log("grades output ->", finalGrades);
  return finalGrades;
}

gradingStudents(grades);
