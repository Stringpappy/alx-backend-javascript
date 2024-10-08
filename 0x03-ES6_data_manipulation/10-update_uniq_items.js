export default function updateUniqueItems(map) {
	if (!(map instanceof Map)) {
		throw new Error("Cannot process");
	}
	map.forEach((items, key) => {
		if (items === 1) {
			map.set(key, 100);
		}
	});
}
