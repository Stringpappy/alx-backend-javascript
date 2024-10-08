export const weakMap = new WeakMap();
const callPoint = 5;

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= callPoint) {
    throw new Error("Endpoint load is high");
  }
}
