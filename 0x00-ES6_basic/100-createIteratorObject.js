export default function createIteratorObject(report) {
  const employees = [];

  // Collect all employees from each department
  for (const department of Object.values(report.allEmployees)) {
    employees.push(...department);
  }

  // Create an iterator for the collected employees
  let index = 0;

  return {
    next: function() {
      if (index < employees.length) {
        return { value: employees[index++], done: false };
      } else {
        return { done: true };
      }
    },
    [Symbol.iterator]: function() {
      return this;
    },
  };
}

