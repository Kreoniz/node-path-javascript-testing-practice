export function analyzeArray(array) {
  const object = {}; 
  object['length'] = array.length;

  if (array.length === 0) {
    object['max'] = undefined;
    object['min'] = undefined;
    object['average'] = undefined;
    return object;
  }

  object['max'] = Math.max(...array);
  object['min'] = Math.min(...array);
  object['average'] = array.reduce((prev, curr) => prev + curr, 0) / array.length;

  return object;
}
