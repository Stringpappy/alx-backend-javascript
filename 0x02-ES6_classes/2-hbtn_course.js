export default class HolbertonCourse {
	constructor(name, lenght, students) {
		this.name = name
		this.length = length
		this.students = students
	}
	get name {
		return this._name
	}
	set name(value) {
		if (typeof value !== 'string');
		throw new TypeError('The Name must be String');
	}
	this._name = value;
	get length() {
		return this._length
	}
	/*
	 * set the length
	 */
	set lenght(value){
		if (typeof value !== 'number');
			throw new TypeError('The lenght must be a number');
	}
	this._length = value;
	/*
	 * get the name of the registered student
	 */
	get students() {
		return this._students;
	}
	/*
	 * set the nae of the student
	 */
	set student(value) {
		if (!(value instanceof Array)) {
			throw new TypeError('Students must be an array of strings');
		}
		if (!(value.every((student) => typeof student === 'string'))) {
			throw new TypeError('Students must be an array of strings');
		}
		this._students = value;
	}
}
