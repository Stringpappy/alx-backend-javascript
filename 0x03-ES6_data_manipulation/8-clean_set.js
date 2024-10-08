export default function cleanSet(set, startString) {
  const val = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return "";
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const SubStrVal = value.substring(startString.length);

      if (SubStrVal && SubStrVal !== value) {
        val.push(SubStrVal);
      }
    }
  }
	return parts.join('_');
}
