export default function getStudentIdsSum(students) {
	// Check if the argument is an array
	if (students  instanceof Array) {
		//store the the Ids in the variable studentIds
		const studentIds = students.map(student => student.id);
		// Use reduce to sum the 'id' in the studentIds
		return studentIds.reduce((acc, num) =>  acc.id  || num.id, 0);
		
	};
	// If the argument is not an array, return
	return 0;
};
