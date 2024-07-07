function caesarCipher(string, shiftFactor) {
  let caesarArr = [];
  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);
    if (charCode < 65 || (charCode >= 91 && charCode <= 96) || charCode > 122) {
      caesarArr.push(String.fromCharCode(charCode));
      continue;
    } else if (charCode + shiftFactor >= 91 && charCode + shiftFactor <= 96) {
      charCode = charCode + shiftFactor - 26;
    } else if (charCode + shiftFactor >= 123) {
      charCode = charCode + shiftFactor - 26;
    } else {
      charCode += shiftFactor;
    }
    caesarArr.push(String.fromCharCode(charCode));
  }
  let caesarString = caesarArr.join("");
  return caesarString;
}

export default caesarCipher;
