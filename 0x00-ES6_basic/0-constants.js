export function taskFirst() {
	const task = 'I prefer const when ican.';
	return task;
}

export function getLast() {
	return ' is okay';
}

export function taskNext(){
	let combination = 'But sometimes let';
	combination += getlast();

	return combination;
}
