function capitalise(string) {
  let fChar = [string[0].toUpperCase()];
  for (let i = 1; i < string.length; i++) {
    fChar.push(string[i]);
  }
  let finalString = fChar.join("");
  return finalString;
}

export default capitalise;
