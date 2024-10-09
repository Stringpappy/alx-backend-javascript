// Assuming Subjects is defined and imported correctly

export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();
export const cTeacher: Subjects.Teacher = {
  firstName: 'Dennis',
  lastName: 'Ritchie',
  experienceTeachingC: 10,
};

console.log('C++');
cpp.setTeacher(cTeacher); // To Call the method instead of assigning
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher(cTeacher); // To Call the method instead of assigning
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher); // To Call the method instead of assigning
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
