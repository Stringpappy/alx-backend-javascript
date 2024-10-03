/**import ClassRoom from './0-classRoom';
export default function() {
	const class1 = new ClassRoom(19)
	const class2 = new ClassRoom(20)
	const class3 = new ClassRoom(34)
	return [class1, class2, class3]
}**/
import ClassRoom from './0-classroom';
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
