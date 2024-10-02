export default function iterateThroughObject(reportWithIterator) {
  const myemployees = [];

  for (const employee of reportWithIterator) {
    myemployees.push(employee);
  }

  return myemployees.join(' | ');
}
