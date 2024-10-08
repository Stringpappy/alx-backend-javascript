function updateStudentGradeByCity(students, city, newGrades){
    const grademap = {};
    newGrades.forEach(grade => {
        grademap[grade.studentIid] = grade.grade;
    });

    //filter and map the students based on the city and their new grades
     .map(student =>)
}