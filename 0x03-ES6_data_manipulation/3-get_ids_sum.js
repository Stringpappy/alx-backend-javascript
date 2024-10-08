function getStudentIdsSum(students){
    // Check if the argument is an array
    if (Array.isArray(students)){
        //store the the Ids in the variable studentIds
        const studentIds = students.map(student => student.id);
        // Use reduce to sum the 'id' in the studentIds
        const sumIds = studentIds.reduce((acc, num) =>  acc + num, 0);
        return (sumIds);
    }
    // If the argument is not an array, return 0
  return 0;
};