export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Gets the name of HolbertonCourse students
   * /
  get name() {
    return this._name;
  }

  /**
   * Sets the name of HolbertonCourse students.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets the length of HolbertonCourse.
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of HolbertonCourse (in months).
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Gets the names of students in HolbertonCourse.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the names of students in HolbertonCourse.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
