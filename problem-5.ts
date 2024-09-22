{
  interface Student {
    name: string;
    age: number;
    grades: number[];
  }
  const student1: Student = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90],
  };
  const calculateAverageGrade = (student: Student) => {
    const totalGrades = student.grades.reduce((acc, currentGrade) => acc + currentGrade);
    const averageGrade = totalGrades / student.grades.length;
    return averageGrade;
  };
  const averageGradeForBob = calculateAverageGrade(student1);
}
