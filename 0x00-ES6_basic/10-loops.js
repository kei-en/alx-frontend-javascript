export default function appendToEachArrayValue(array, appendString) {
  const cpy = [...array];
  for (const item of array) {
    cpy[array.indexOf(item)] = appendString + item;
  }

  return cpy;
}
