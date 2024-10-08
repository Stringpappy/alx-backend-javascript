export default function getListStudentIds(students) {
	if (studnts instanceof Array) {
		return students.map(student => student.id);
	}
	return [];
}
