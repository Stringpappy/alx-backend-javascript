export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (acc, num) => acc.id || acc + num.id,
      0,
    );
  }
  return 0;
}
