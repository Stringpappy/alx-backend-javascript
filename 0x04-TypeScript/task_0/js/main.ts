interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Defining studentOne correctly
const studentOne: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 22,
    location: 'Lagos, Nigeria',
};

// Defining studentTwo correctly
const studentTwo: Student = {
    firstName: 'Jeje',
    lastName: 'Odunayo',
    age: 28,
    location: 'Ado-Ekiti, Ekiti state, Nigeria',
};

// Array of students
const studentsList: Array<Student> = [studentOne, studentTwo];

// Function to render the table
function renderStudentTable(students: Array<Student>): void {
    const tableBody = document.querySelector('#studentTable tbody');

    // Clear previous rows
    tableBody.innerHTML = '';

    // Add new rows for each student
    students.forEach(student => {
        const row = document.createElement('tr');
        
        const firstNameCell = document.createElement('td');
        const locationCell = document.createElement('td');

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);

        tableBody.appendChild(row);
    });
}

// Function to dynamically add the stylesheet to the page
function addStyleSheet() {
    const styleSheet = `
    /* General table styling */
    .student-table {
        width: 60%;
        margin: 20px auto;
        border-collapse: collapse;
        font-family: 'Arial', sans-serif;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }

    .student-table thead {
        background-color: #4CAF50;
        color: white;
    }

    .student-table th, .student-table td {
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    .student-table tbody tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    .student-table tbody tr:hover {
        background-color: #f1f1f1;
        cursor: pointer;
    }

    .student-table th {
        text-transform: uppercase;
        font-size: 1.1em;
        font-weight: bold;
    }

    /* Add some hover effects to enhance interaction */
    .student-table td {
        transition: background-color 0.3s ease;
    }

    .student-table td:hover {
        background-color: #f9f9f9;
    }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = styleSheet;
    document.head.appendChild(styleElement);
}

// Render the table when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add the styles first
    addStyleSheet();
    renderStudentTable(studentsList);
});
