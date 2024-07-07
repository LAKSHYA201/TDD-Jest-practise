function reverseString(string) {
  let reverseArr = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reverseArr.push(string[i]);
  }
  let reverseString = reverseArr.join("");
  return reverseString;
}

export default reverseString;
