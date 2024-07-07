function analyseArray(arr) {
  let average = arr.reduce((acc, val) => acc + val, 0) / arr.length;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let length = arr.length;

  return { average, min, max, length };
}

export default analyseArray;
